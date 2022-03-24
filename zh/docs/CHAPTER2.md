# 协议策略开发
协议应满足以下条件

* 是否有存取费用
* 使用到的稳定币是否有对应chainlink汇率。chainlink汇率查询地址：[https://docs.chain.link/docs/ethereum-addresses/](https://docs.chain.link/docs/ethereum-addresses/)
* 矿币、稳定币的兑换平台和兑换路径正常
* 第三方有提供资产评估或者净值的查询接口
* 第三方支持在一笔交易内，顺序执行 取款，卖矿复投，再存款
* 协议策略是否有通过审计，是否有保险，锁仓量，官网APY计算方式

做完以上调查后，可进入策略开发

## 策略开发流程

DeFi一般投资流程：获取LP，质押LP获取矿币，卖出矿币转成策略需要的稳定币进行复投
* 找到币对地址
* A币地址
* B币地址
* 找到提供LP池子地址
* 授权币对使用额度
* LP地址
* 授权LP使用额度
* 质押LP池子地址
* 矿币地址
* 卖矿路径，可以到[1inch](https://1inch.io/)平台查看最佳兑换路径；BNB链可以到[pancakeswap](https://pancakeswap.finance/swap)查看
* Fork链开发测试时是否需要模拟第三方收割
* 收益来源
* 交易手续费
* 承担风险的收益（期权、保险费）
* 股票发放（矿币）
* 借贷利息
* 策略收益形式
* LP数量增加
* LP净值增加（其他用户兑换产生的交易手续费收入）
* 发放矿币

## 资金调配

变量定义：

* 调仓的周期，需要保证在调仓后的一个周期内，调仓后的收益-调仓前的收益-调仓的成本>0
* 365 一年的天数，365
* 策略的原有资产
* 调仓前的策略apr（apy需要转换成apr），调仓算法的apy目前取值为策略链外计算APY的7天平均值
* 假设策略调仓的资金变更值
* 策略目标投资池子的TVL，算法里面用来作为调仓后apr变化的参数

针对单个策略，资产变更和收益变更的关系为：

原收益：`gain1 = asset1 *apr1* durationDays / yearDays`  
变更后的收益：`gain2 = (asset1+deltaAsset-exchangeLoss)*apr2*durationDays/yearDays`  
变更后的apr：`apr2=apr1*\frac{poolAssets1}{(poolAssets1+deltaAsset-exchangeLoss)}`

将gain2中的apr2使用上面的等式代入后：

`gain2=\frac{apr1*durationDays/yearDays*(asset1+deltaAsset)*poolAssets1}{poolAssets1+deltaAsset-exchangeLoss}`

那么单个策略的变更后的收益和变更资产的关系为：

`deltaGain = gain2-gain1 = deltaAsset*\frac{(poolAsset1-asset1)}{(poolAsset1+deltaAsset-exchangeLoss)}* apr1 *durationDays/yearDays`

单个策略，资金变更的成本为：

退出资金操作gas费

在deltaAsset<0时，表示策略发生取款事件
操作费用为：`withdrawFee = 当前gasPrice *withdrawGas（withdrawGas为withdraw操作消耗的gas，通过预先测试预估得到的）`
兑换损失为：`exchangeLoss = deltaAsset* exchangeLossRate`  
（exchangeLossRate当前设置为配置好的滑点上限0.3%，由于实际兑换可高可低，同币种也可能不兑换，但是预估计算时，是以配置的滑点值来算损失）


在deltaAsset>0时，表示策略投入

操作费用为：`lendFee = 当前gasPrice *lendGas（lendGas为lend操作消耗的gas，通过预先测试预估得到的）`  
兑换损失为：`exchangeLoss = deltaAsset* exchangeLossRate`  
（exchangeLossRate当前设置为配置好的滑点上限0.3%，由于实际兑换可高可低，同币种也可能不兑换，但是预估计算时，是以配置的滑点值来算损失）

资金不变

在deltaAsset为0时，表示不动，无操作费用


当策略在调仓后还存留资金，则周期内还需要执行Harvest卖矿复投，需要Harvest操作费用为：

`harvestFee = HarvestGas* durationDays（当前是假设周期内每天执行harvest）`

缓冲池资金变更的成本为：

For buffer pool funds, it is considered that:  
When fetching from the buffer pool:  
withdrawFee = 0  
When putting into the buffer pool:  
lendFee = 0  
exchangeLoss =0  
Buffer pool without Harvest  
harvestFee=0

## Q&A 问题求解

那么我们要求的就是，所有策略的deltaGain的总和最大值：

`总变更收益 = Sum(deltaGain -operateFee - exchangeLoss-harvestFee)
=sum(deltaAsset*\frac{(poolAsset-asset)}{(poolAsset+deltaAsset-exchangeLoss)}* apr * 
durationDays/yearDays - operateFee - exchangeLoss - harvestFee)`  
该公式中，唯一的变量为每个策略的deltaAsset

约束条件：

&emsp;&emsp;The funds of the same protocol strategy (multiple constraints) do not exceed 30% of 
the total funds. For example, 1 and 2 strategies are the same as the protocol:  
&emsp;&emsp;`totalAsset * 0.3 - Asset1 - deltaAsset1 -Asset2-deltaAsset2 >=0`  
&emsp;&emsp;`The sum of all asset changes in and out is 0: sum(deltaAsset) = 0`

边界条件：

其他资产限制条件，作为deltaAsset的大小边界计算条件，有

* 策略资产不能超过总资产20%
* 策略资金不能超过目标池子资产的50%
* 策略追加投入资产不能超过可投资配额

所以，deltaAsset最小为退出所有策略现有资产，最大值为上面的条件限制后的最大可投资资产

Solving Solution 求解：

Currently, python scipy's optimize.minimize is used to find the minimum value (negative number) to find the optimal solution:

Plain Text
```
optimize.minimize(
maxReturn, //The function to find the optimal solution, the maximum value formula obtained above
res.x, //Input parameter, initial position [0,0,0,0,0]
args=(aprs, originalAssets, poolAssets, lendGasFees, withdrawGasFees, harvestGasFees, exchangeLossRates),
method='SLSQP', //minimize limit algorithm
bounds=bnds, //The upper and lower boundaries of deltaAsset
constraints=cons //Constraints
)#
```

Plain Text
```
bnds=[[-2000,0],[-1000,1000]]
cons.append({'type': 'eq', 'fun': lambda deltaAssets: np.sum(deltaAssets)}) # The sum of asset changes is 0
```

得到的结果示例：
```
{"x": [1000.1637007999999, 1998.3274016, 1998.3274016, 1998.3274016, -1.0, 999.1637007999998, 999.1637007999997, 999.1637008000002, -9991.637008],
"fun": -3230.6623826483046,
"jac": [-0.6831997276114634, -0.6836974718274632, -0.20573101933809995, -0.1967651001667491, -0.17336689662483878, -0.158915626574435, -0.12301853177496014, -0.09437430698781099, 0.0],
"nit": 52,
"nfev": 510,
"njev": 51,
"status": 0,
"message": "Optimization terminated successfully",
"success": true,
"originalApr": [0.693805752190747, 0.693805752190747, 0.21582011365937293, 0.20715422941996242, 0.18236710019882918, 0.16893762018268976, 0.13315559493399354, 0.10437493594181224],
"newApr": [0.6935041806541801, 0.6937514740983259, 0.21577545017119, 0.2069590855275276, 0.18236712564561333, 0.16892667777489306, 0.13308738685939211, 0.10437462303021353],
"originalGain": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"newGain": [693.6177078433565, 1386.3425805910774, 431.18999466966443, 413.5720116197364, -0.1823671256456133, 168.78540452941124, 132.97608598423147, 104.28733461647309],
"operateLoss": [10.001637008, 19.983274016, 19.983274016, 19.983274016, 0.0, 9.991637007999998, 9.991637007999996, 9.991637008000003],
"deltaGain": [693.6177078433565, 1386.3425805910774, 431.18999466966443, 413.5720116197364, -0.1823671256456133, 168.78540452941124, 132.97608598423147, 104.28733461647309],
"deltaAssets": [1000, 1998, 1998, 1998, -1, 999, 999, 999, -9992]}
```

更好的方案：

全局优化算法  
非凸优化算法  
各策略初始APY的计算  
兑换：考虑投入是否有相同币种
