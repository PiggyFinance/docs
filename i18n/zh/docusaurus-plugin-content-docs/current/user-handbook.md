---
sidebar_position: 5
---

# 如何使用BOC

需要在BOC[用户投资页](https://bankofchain.io/#/invest)完成投资。如果您在[首页](https://bankofchain.io/#/)，请点击“LAUNCH APP”按钮进入用户投资页。

![launchapp](/images/launchapp.png)

## 连接钱包

您可以通过MetaMask和WalletConnect与BOC进行交互，您需要点击“CONNET WALLET”按钮。

![connectwallet](/images/connectwallet.png)

连接钱包后，您可以看见您账户里的USDT余额。

![pic4](/images/pic-4.png)

## 参数设置

### 跨链桥

我们提供了跨链桥推荐，如果您需要实现加密资产跨链。

![chainbridge](/images/chainbridge.png)

### 切换链

目前BOC已经实现了Ethereum、BNB Chain和Polygon这3条链，如果您需要切换链，可以在“NETWORKS”中完成切换。

![networkchange](/images/networkchange.png)

## 投资与赎回

### 存款

连接钱包成功后，您可以通过选择期望的存款金额或选择“Max”最大余额存款，点击“DEPOSIT”，完成存款。

![pic7](/images/pic-7.png)

### 取款

连接钱包成功后，您可以通过选择期望的取款份额或选择“Max”最大份额，点击“WITHDRAW”，完成取款。

![pic8](/images/pic-8.png)

#### 取款高级参数

![advancesetting](/images/advancesetting.png)

这里有3个高级设置参数：

1. **Exchanged**：是否开启兑换。BOC中各个策略使用了不同的稳定币种。用户取款时是按照策略APY从低到高进行取款，如果取到了非USDT的策略，将会返回对应策略的稳定币。例如取到YearnLusdStrategy则返回LUSD。如果关闭兑换则会将对应价值的LUSD返回到您账户。如果开启兑换，则需要设置Slippage参数。
2. **Max Loss**：取款最大损失。当您指定取款份额后，会显示以当前净值下的总资产，但这并不是您最终能拿到手的资金，在取款过程可能会发生损失，包括兑换滑点损失。假如您此时总资产预估为$1000，选择Max Loss=0.3%，则您拿到手的资金不会少于$997。
3. **Slippage**：不同币种兑换滑点。在开启Exchanged后，需要指定您接受的滑点。

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
