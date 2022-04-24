---
sidebar_position: 4
---

# 协议算法设计

## 总体流程说明

![pic2](/images/pic-2.png)

1. - **存入`deposit`**BOC协议支持用户将手中的三大稳定币（USDT、USDC、DAI）以任意组合、任意数量的形式存入，并`mint`出相应价值的USDi返回给用户。

   - **取出`withdraw`**用户可以随时将USDi通过BOC协议换回三大稳定币，缺省将按照当时Vault中三大稳定币的比例进行返回，也可以指定返回某一种币，并`burn`相应价值USDi。

2. Vault接收到稳定币后通过外部预言机`queryTokenPrice`查询用户转入稳定币的价格（预言机返回的价格高于1USD时按1USD算，低于1USD时按预言机价格算）。

3. 根据计算出来的价值，`mint/burn`铸造/销毁等量价值的USDi。

4. Keeper模块到达`doHardWork`触发条件，触发`doHardWork`。

5. Vault调用聚合兑换模块`swapTokenToWants`。

6. 聚合兑换模块`swapTokens`完成兑换。

7. Vault接收到聚合兑换模块兑换出的目标币种。

8. Vault按照策略需要的币种将稳定币`deposit`投入策略中。

9. 策略将稳定币`deposit`投入到第三方协议。

10. Keeper模块到达`harvest`触发条件，触发`harvest`。

11. Harvester触发各个策略执行`harvest`。

12. 各策略执行`claimRewards`收矿。

13. 各策略将矿币`transferRewards`转移到Harvester。

14. Harvester通过聚合兑换将矿币`sellRewards`卖成稳定币。

15. Harvester`sendProfitToVault`将稳定币转移到Vault中。

16. Keeper模块到达`rebase`触发条件，触发`rebase`。

17. Vault调用`changeTotalSupply`增发USDi。

18. Vault收取部分收益，转移到国库Treasury。

19. 国库将收益用户`buyback`回购BOC治理代币。

## harvest

Keeper每日都会触发`harvestTrigger`，判断是否达到`harvest`条件，以下是2个`harvest`条件：

1. **超过最大时间间隔**。

2. **收益\*20%>`harvest`成本**。

满足以上任意一个条件即可做`harvest`工作，内容包括2项：

1. 执行收矿转移Harvester（对于有产矿的策略而言且达到卖矿阈值）。

2. 上报当前策略资产。

| 设置参数                                                     | Ethereum  | BNB Chain          | Polygon      |
| ------------------------------------------------------------ | ------------ | ------------ | ------------ |
| 定时任务触发周期                                             | 每天上午6:00 | 每天上午6:00 | 每天上午6:00 |
| 触发策略`harvest`最大时间间隔 （若当前`harvest`与上次`harvest`间隔大于此值，必须做`harvest`） | 1.5天        | 1.5天        | 1.5天        |
| 触发策略`harvest`的收益成本比例系数X （`harvest`收益>=成本*X，则可做`harvest`） | 5            | 5            | 5            |

## rebase

当Vault内总资产大于USDi发行量的总价值，则说明产生了新的收益，此时USDi相较于美元的价值将会被重置，同时增发USDi数量，使USDi的总价值与Vault资产总价值相符，确保USDi与USD的价格1:1锚定。增发的USDi的其中20%将作为管理费用转给国库。

## 资金调配

### doHardWork

将第三方协议官方APY、每个策略投资/赎回所需要的gas、兑换滑点限制、[资金调配规则](/zh/introduction-to-boc#资金分配规则)等作为调仓算法入参，输出待投资金应投资的策略以及金额。

| 设置参数                                                  | Ethereum      | BNB Chain              | Polygon          |
| --------------------------------------------------------- | ---------------- | ---------------- | ---------------- |
| 定时任务触发周期                                          | 周三周六上午7:00 | 周三周六上午7:00 | 周三周六上午7:00 |
| 成本收益计算周期X （投资X天的收益>=成本，则`doHardWork`） | 365天            | 365天            | 365天            |

### allocation

与`doHardWork`相比，`allocation`多做了一步：将低APY策略的资金取出，然后再将第三方协议官方APY、每个策略投资/赎回所需要的gas、兑换滑点限制、[资金调配规则](/zh/introduction-to-boc#资金分配规则)等作为调仓算法入参，输出应投资的策略以及待投金额。

| 设置参数                                                     | Ethereum    | BNB Chain            | Polygon        |
| ------------------------------------------------------------ | -------------- | -------------- | -------------- |
| 预调仓报告触发时机                                           | 每周天上午6:50 | 每周天上午6:50 | 每周天上午6:50 |
| 定时任务触发周期                                             | 每周一上午7:00 | 每周一上午7:00 | 每周一上午7:00 |
| 成本收益计算周期X （调仓X天的收益>=成本，则可做`allocation`） | 30天           | 30天           | 30天           |

### 资金调配算法

| 变量名       | 变量含义                                                     |
| ------------ | ------------------------------------------------------------ |
| durationDays | 调仓的周期，需要保证在调仓后的一个周期内，调仓后的收益-调仓前的收益-调仓的成本>0 |
| yearDays     | 365天                                                        |
| asset1       | 策略的原有资产                                               |
| apr1         | 调仓前的策略APR（APY需要转换成APR），调仓算法的APY目前取值为策略链外计算APY的7天平均值 |
| deltaAsset   | 假设策略调仓的资金变更值                                     |
| poolAssets1  | 策略目标投资池子的TVL，作为调仓后APR变化的参数               |

**未调仓前收益**
$$
gain1 = \frac{asset1 \times apr1 \times durationDays}{yearDays}
$$
**变更后的收益**
$$
gain2 = \frac{ (asset1+deltaAsset-exchangeLoss) \times apr2 \times durationDays}{yearDays}
$$
**变更后的APR**
$$
apr2 = \frac{apr1 \times poolAssets1}{(poolAssets1+deltaAsset-exchangeLoss)}
$$
将gain2中的apr2使用上面的等式代入后：
$$
gain2=\frac{apr1 \times durationDays/yearDays \times (asset1+deltaAsset) \times poolAssets1}{poolAssets1+deltaAsset-exchangeLoss}
$$
那么单个策略的变更后的收益和变更资产的关系为：
$$
deltaGain = gain2-gain1 = \frac{deltaAsset \times (poolAsset1-asset1) \times apr1 \times durationDays}{(poolAsset1+deltaAsset-exchangeLoss) \times yearDays}
$$
**单个策略资金变更成本**

| 变量名           | 变量含义                                                    |
| ---------------- | ----------------------------------------------------------- |
| withdrawFee      | 退出资金操作费                                              |
| lendFee          | 追加资金操作费                                              |
| exchangeLoss     | 兑换币种滑点损失                                            |
| harvestFee       | `harvest`资金费用                                           |
| profitChangeFee  | 资金变更成本                                                |
| withdrawGas      | withdawGas为`withdraw`操作消耗的gas，通过预先测试预估得到的 |
| lendGas          | lendGas为`lend`操作消耗的gas，通过预先测试预估得到的        |
| exchangeLossRate | 兑换滑点                                                    |

$$
profitChangeFee=withdrawFee+lendFee+exchangeLoss+harvestFee
$$

$$
withdrawFee = gasPrice \times withdrawGas
$$

$$
lendFee= gasPrice \times lendGas
$$

$$
exchangeLoss=deltaAsset \times exchangeLossRate
$$

$$
harvestFee=harvestGas \times durationDays
$$

求解所有策略的deltaGain的总和最大值：

$$
profitChange=\max\sum_{i=1}^m(deltaGain_i -withdrawFee_i-lendFee_i - exchangeLoss_i-harvestFee_i)
$$

$$
profitChange=\max\sum_{i=1}^m(\frac{deltaAsset_i \times (poolAsset_i-asset_i) \times apr_i \times durationDays_i}{(poolAsset_i+deltaAsset_i-exchangeLoss_i) \times yearDays_i} - operateFee_i - exchangeLoss_i - harvestFee_i)
$$
该公式中，唯一的变量为每个策略的deltaAsset。同时求解还需要受限于

**约束条件**

1. 同协议策略（多个约束）资金不超过总资金的30%。
2. 所有资产变更进出总和为0。

**边界条件**

1. 策略资产不能超过总资产20%。
2. 策略资金不能超过目标池子资产的50%。

使用python scipy的`optimize.minimize`求得当前最佳调仓方案。

## 公共参数配置

| 设置参数                                               | Ethereum | BNB Chain     | Polygon |
| ------------------------------------------------------ | ------- | ------- | ------- |
| 资金调配计算兑换滑点设置                               | 0.25%   | 0.25%   | 0.25%   |
| gas 配置 （包括策略存取款gas、兑换gas、`harvest`成本） | 实际gas | 实际gas | 实际gas |

## 官方APY计算规则

在资金调配时需要传入官方APY作为参考。官方APY的来源渠道有以下几种：vfat.tools、coingecko、zapper、Official APY、apy.vision Fee等。如果官方APY来源渠道未包含该协议策略的APY计算，BOC直接通过复刻协议策略的官方APY计算规则。

一般而言，协议策略的官方APY由做市收益与矿币收益组成。以BOC已经对接的ConvexLusdStrategy策略为例，其APY由以下表格内容组成

| 收益来源   | APR         | 是否复利 | 计算方式 | 数据来源                                     |
| ---------- | ----------- | -------- | -------- | -------------------------------------------- |
| 交易手续费 | 0.0024      | 否       | 接口获取 | <https://www.convexfinance.com/api/curve-apys> |
| crv矿币    | 0.023523458 | 是       | 接口获取 | <https://www.convexfinance.com/api/curve-apys> |
| cvx矿币    | 0.024132445 | 是       | 读取合约 | 按时间发放，一年矿币价格/池子总资产，得到APR |

其中“是否复利”是指该收益来源是否可以复利。交易手续费是无法复利的，而矿币收益是可以不断复利，具体APR转换为APY的公示如下：
$$
APY=(1+APR)^{periods}-1
$$

其中periods参数是利息发放周期。

## 策略实际APY计算规则

策略实际APY是以策略币本位收益进行计算。
