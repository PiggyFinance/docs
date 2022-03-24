# 如何使用BOC

The following diagram serves as a basic understanding of how BOC works and how users can interact with BOC.

下图是对BOC如何工作以及用户如何与BOC互动的基本理解。

## V1.5版本流程图：

![](https://lh4.googleusercontent.com/dsCE5gXdjR_TSKb81VS11YAeMAMezkqKjPC2NQ8XF-kQdZZB0TJ1JWPUs6WiiZViyYYT_AE-zT_PVt6i5uY0fgltCerZQfd1yNxOJvwV3hmNeYTCNtq-dGNSVyr_hgo4EVHPYfdd)

备注:
* 用户存款和取款金额为美元估值，没有股价概念。
* 将收取默认的0.025%取款费。
* 策略提取金额将发送给Harvester，用于合并销售到USDT，并存入保险库。
* 战略价值以美元为单位进行估算。
* 实际策略APY需要包括燃气费价值。
* 美国农业部保险库的增加是由重新基准触发的。
* 利润分享接收时间修改为rebase（）。

## 使用钱包连接BOC

钱包允许用户与中国银行进行互动和投资交易。用户连接钱包的第一步是输入“连接钱包”按钮，如中国银行网站首页所示。

![](https://lh4.googleusercontent.com/jRu4Khc-F53bnQbucpgKYRfpCKRKliz70T0ALiZBRQuBZbnQWllLI_WKTfj14e0fjfC5AcQ2HMnuRcHE4WH-nMaHYjuzWgnWMSD2zQQSLK6XvhUbFritZXqYOp3nkxbxSwgPRZ-8)

Users can connect a wallet using the Metamask Browser extension, or via WalletConnect.  User can also acquire corresponding USD-pegged crypto assets in the following ways:
* Minting USD-pegged crypto assets by depositing USD into the underlying Blockchain and receiving USD-pegged crypto assets in return. For instance the example of FUSD on Fantom.
* Using BlockBank Application to exchange supported USD stable coin assets, stable coin exchange uses 1Inch and Paraswap aggregators to reduce slippage.
* Purchasing stable coins on the decentralized exchanges directly: Paraswap & 1inch

Once the wallet are connected, the crypto asset values should automatically displayed as a connected wallet where LP can now begin to start the parameters setup as well as the yield farming process.

用户可以使用Metamask浏览器扩展或通过WalletConnect连接钱包。用户还可以通过以下方式获得相应的美元挂钩加密资产：



* 通过将美元存入基础区块链并获得美元挂钩加密资产作为回报，铸造美元挂钩加密资产。例如Fantom上的FUSD示例。

* 使用BlockBank应用程序交换受支持的美元稳定硬币资产，稳定硬币交换使用1Inch和Paraswap聚合器来减少滑动。

* 直接在分散的交易所购买稳定的硬币：Paraswap&1inch



连接电子钱包后，加密资产值应自动显示为连接的电子钱包，LP现在可以开始参数设置和产量种植过程。

![](https://lh4.googleusercontent.com/YRLNx9K3EQE1GdDwOJ2QrOxSwrT9XbbXzSYFa24irGYR5wL5xGQwo_hux_YqSqrKCIvSpLvFPUkcDZB0dAAWfg0346YmyQEiYcpnR0_50EGuZjYBN5CD0lScuBzYpxOmjrKEkBgB)

## 参数设置（区块链与跨链桥）

With a valid Wallet connection, the following parameters can be set:

Blockchain Bridge Selection

When users need to move crypto tokens from one blockchain to another, the blockchain bridge is the method to allow the transfer of assets.  In BOC, you can select the related bridge type for your action.

通过有效的钱包连接，可以设置以下参数：

区块链桥选择

当用户需要将加密令牌从一个区块链移动到另一个区块链时，区块链桥是允许资产转移的方法。在BOC中，您可以为您的操作选择相关的桥接类型。

![](https://lh6.googleusercontent.com/_u-HOOWPipEnUjLcfqgUWc6tfPd5q03HlgYeIXHXZjEPnE587DD7W-Boq1Pr6U61_JVg9Y9_okIKynyKIVu2vfNS9i-oyvNY8ZkkoOG6QgTBemXICeJ56TkfNk2zW0oaBgrqA1lL)

Blockchain Main Chain Selection

Users can select which main chain is the operation to focus on by selecting the chain from the related drop-down list.

主链选择

用户可以从相关下拉列表中选择要关注的操作主链。

![](https://lh5.googleusercontent.com/gj3l-PgLUfDwdmiR_VGPy2GIGt0XGu9tji3egerYdHH0E_iXNDB9mxmGnbY1Hpp6d64P2b0fFsbXq91zZNEqyvrDo_JvOP5981n0DUv6gtCoYN5NlSTRCvahwOSpecHN8rRGJUYZ)

## 投资与赎回

Deposit Asset - once the user has successfully connected the wallet with BOC, he/she may start the investment process by selecting the deposit amount into the intended vault.  Choose the amount to deposit or select “Max” for full deposit.

存款资产-一旦用户成功地将钱包与中国银行连接，他/她可以通过选择存款金额进入预期的金库来启动投资流程。选择要存款的金额，或选择“最大”作为全额存款。

![](https://lh4.googleusercontent.com/WBBsIuguDIqjhcCF2_4DBwt6lMYantNEYsrzkC9vIS7XNVKAm7R4A2rousAfOkEaDC4hQGjZ6D9TwMRD2xKewVf8olGyMab0U7tO313WezyrHQhI-PnWF-Rxk83msv5fOddfthsq)

Withdrawal

Withdraw Asset - once the user has successfully invested with the wallet by deposit on BOC, he/she may start the withdrawal process at any time by selecting the withdrawal amount from the intended vault.  Choose the amount to withdrawal or select “Max” for full withdrawal from the selected vault.

取款资产——一旦用户通过在中国银行存款成功投资钱包，他/她可以随时从预定的金库中选择取款金额，启动取款流程。选择要提取的金额，或选择“最大”从所选vault中完全提取。

![](https://lh4.googleusercontent.com/D9P6Sv2dzfM1WFnDJxsKDxQDM6ZiT9iI2uQB33GNYinBJDvGvnt7KhR7WlIAeuskUfymWUx8rn1GlshxbC-r831wSykqYbqLFQ0msLrCeej7ACg068vgt1mIIeCg_Okl1xr6vNVT)

## 你的投资是如何赚钱的？How to understand your investment earning

About the actual APY calculator, please refer to the APY section for the details.  Users can see their immediate withdrawal amount or the estimated amount on the withdrawal screen.

关于实际的APY计算器，请参考APY部分了解详细信息。用户可以在取款屏幕上查看其即时取款金额或估计金额。

![](https://lh3.googleusercontent.com/DwQiR1vYoONN8PTsLBlRinJximhpnYYhzHua-ReBE9fnMOXsrvjMgbCnYHypwhbmBuxIF8qHHKhGTBPa7bepZfUxpGlDtlu5-cbZN6EciggHrKbc4NgdFG-6zzJ0yWnPJyPOu05d)

Historical performance data can be found from the BOC Dashboard.

历史业绩数据可从中国银行仪表盘中找到。

https://dashboard.bankofchain.io/#/

![](https://lh6.googleusercontent.com/hlXmvODZjpYg8-NAVU91_xn_QW9uzQ_ejUoSFjhQBl3SIEpxfstGcp4y3X4ftxBtk4H6kxsurV806LhRbuTwUo7n6NimYJYP-QHp1HqFxxt7lV0j09_qOdJP2kkHtklIUZ9n7GXV)

## APY计算规则 Understand dashboard: APY calculation

(Work in Progress / Pending for final Design Document)

Off-chain APY Calculation 链外APY计算  
Sources of third party APY inquiry 如果使用第三方APY查询，来源有：  
&emsp;&emsp;vfat.tools  
&emsp;&emsp;coingecko  
&emsp;&emsp;zapper  
&emsp;&emsp;Official APY  
&emsp;&emsp;Apy.vision Fee

Harvest APY Calculation / Harvest APY计算说明：
<https://github.com/harvest-finance/harvest-api/blob/f24dd6dcf59c1fe143ae34acf1e260379c5eed87
/docs/apr-and-apy.md>

SNX Pool: For a fixed period of time, a fixed number of tokens are allocated. Harvest is the 
kind of SNX Pool with APY calculated on a weekly basis, 52 weeks a year  
SNX Pool: 固定时段，分配固定数量代币。Harvest都是这类SNX Pool，按周计算APY，一年52周

For currency pair pools with transaction fees, similar to uniswap and sushi, they borrow from 
the interface of apy.vision  
对于有交易手续费的币对池，类似uniswap，sushi，他们借用apy.vision的接口

For curve, there are CRV apy (the official website has a calculation method, and the display is 
consistent with the official website) and pool apy+lend apy (with an interface)  
对于curve，有CRV apy（官网有计算方式，且和官网显示一致）和pool apy+lend apy（有接口）

APR formula: `the number of mining coins issued in one year * the price of mining coins in USD / 
the total share of LP corresponding to the mining pool / the USD price of LP`  
APR计算公式：`一年发放的矿币数量*矿币USD价格/矿币池对应的LP总份额/LP的USD价格`

矿币APY，因为需要取出来复投，展示的是weekly apr，假设是用户每周会claim FARM，然后复投，`weklyCompound(apr) = (1 + (apr% / 52 / 100%)^52 - 1) * 100%`


aave APY计算官网说明：<https://docs.aave.com/developers/guides/apy-and-apr>

Code Reference 代码参考：  
Pickle APY reference pickle的apy计算参考：
<https://github.com/pickle-finance/pf-core/tree/main/src/behavior/impl>  
Harvest APY reference harvest的apy计算参考：
<https://github.com/harvest-finance/harvest-api/tree/master/src/vaults/apys/implementations>
