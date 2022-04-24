---
sidebar_position: 5
---

# 如何使用BOC 

进入BOC[首页](https://bankofchain.io/#/)，点击“LAUNCH APP”按钮进入[用户投资页](https://v1.bankofchain.io/#/invest)。

![launchapp](/images/launchapp.png)

## 连接钱包

您可以通过[MetaMask](https://metamask.io/#/) 和 [WalletConnect](https://walletconnect.com/#/)与BOC进行交互, 点击“CONNET WALLET”按钮连接您的[钱包](appendix#wallet)。

![connectwallet](/images/connectwallet.png)

成功连接钱包后，可以看见您账户里的USDT余额。

![pic4](/images/pic-4.png)

## 参数设置

### 跨链桥

BOC提供[Polygon](https://wallet.polygon.technology/#/)和[Binance](https://www.binance.com/#/)两种[跨链桥](appendix#bridge)，方便您实现加密资产跨链。点击页面左上方的“Bridge”即可选择跨链桥。

![chainbridge](/images/chainbridge.png)

### 切换链

BOC提供Ethereum、BNB Chain和Polygon三条链，进入页面左上方的“NETWORKS”中即可切换。

![networkchange](/images/networkchange.png)

## 存币 & 取币

### 存入币

目前BOC支持用户将手中的三大稳定币（USDT、USDC、DAI）以任意组合、任意数量的形式存入。成功连接钱包并且设置好参数之后，相应的币下输入您期望的存币金额，或选择“Max”，即存入您钱包中的所有此种代币，点击“DEPOSIT”，完成存币。

![depositpage](/images/depositpage.png)

### 取出币

成功存币后，您可以随时将USDi换回三大稳定币（USDT、USDC、DAI），也可以指定换回某一种币。点击“WITHDRAW”切换到取币页面，选择期望换回的币种，输入需要的取币金额，或选择“Max”全部取出，点击“WITHDRAW”，完成取币。

![withdrawpage](/images/withdrawpage.png)

#### 取币的高级参数设置

![withdrawadvancesetting](/images/withdrawadvancesetting.png)

点击“Advanced Settings”即可展开高级参数设置：

1. **Max Loss**：取币最大损失。当您输入取币数额后，会显示当前净值下的预估总资产，但这并不是您最终能拿到手的资金，在取款过程可能会发生损失，比如滑点损失。例如：此时您的总资产预估为$1000，选择Max Loss = 0.3%，则您拿到手的资金不会少于$997。
2. **Slippage**：不同币种的[滑点](appendix#滑点-slippage)。您需要选择或输入所能接受的滑点。

## Dashboard

<https://dashboard.bankofchain.io>

![dashboard](/images/dashboard.jpg)

各个数据说明如下：

1. 链上Vault锁仓量，数据通过读取subgraph接口取得。
2. 投资用户数，数据通过读取subgraph接口取得。
3. 根据最近30天的净值计算出来的APY。
4. 协议资金占比，数据通过读取subgraph接口取得。
5. 各策略总资产，读取合约接口。
6. 官方APY，每日凌晨定时拉取。
7. 币本位Weekly Profit、Weekly APY。
8. 各个策略Official APY与Weekly APY历史列表。
9. Vault操作记录，同区块链浏览器展示。

BOC subgraph：

Ethereum：<https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-eth>

BNB Chain：<https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-bsc>

Polygon：<https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-matic>

## 策略详情页

以SushiUsdcUsdtStrategy为例，提供了策略的详情，进入[策略详情页](https://dashboard.bankofchain.io/#/strategy?id=0x4717eaa5da97f11bda3a3f021a20fd8cb72eab64&chain=137)如图

![detail](/images/detail.jpg)

各个数据说明如下：

1. 策略详情：
   - 策略名称。
   - 策略接收的稳定币种。
   - 策略当前总资产（以USDT估值）。
   - 策略历史投资总资产（以USDT估值）。
   - 策略当前状态（上架Vault/下架Vault）。
2. 策略历史收益APY表现：
   - 历史Official APY（黄线）。
   - 历史Weekly APY（蓝线）。
3. 策略总资产（币本位）。
4. 策略操作资产变动（币本位）。
5. 策略操作类型：
   - `harvest`：策略完成一次卖矿复投并上报总资产估值。
   - `lend`：Vault将资金投入策略中，此动作发生于资金调配（`doHardwork`、`allocation`）。
   - `redeem`：Vault从策略抽取资金，此动作发生于资金调配（`allocation`）。
6. 策略操作时间。

## 个人投资分析页

进入[个人投资分析页](https://dashboard.bankofchain.io/#/mine?chain=1)可以看到个人投资收益。

![personalpage](/images/personalpage.jpg)

各个数据说明如下：

1. 个人投资总资产估值（以USDT计算）。
2. 获取的BOC份额。
3. 近30日APY。
4. 未提取的收益（以USDT计算）。
5. 已经提取的收益（以USDT计算）。
6. 历史个人总资产。
7. 月收益。
