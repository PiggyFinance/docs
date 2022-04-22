---
sidebar_position: 5
---

# User Handbook

Here is a quick guide to interact and invest on the BOC platform.
First, to invest in BOC it's necessary need to start on the [landing home page](https://bankofchain.io/#/) and click on `LAUNCH APP` button.

![launchapp](/images/launchapp.png)

## Wallet Connection

We can interact with BOC through [virtual wallets](appendix#wallet), the APP is compatible with [MetaMask](https://metamask.io/) and [WalletConnect](https://walletconnect.com/), by clicking on the `CONNECT WALLET` button.

![connectwallet](/images/connectwallet.png)

After connecting the wallet, we can see the USDT balance in our account.

![pic4](/images/pic-4.png)

## Parameter Settings

### Cross-chain Bridge

BOC provides [cross-chain bridge](appendix#bridge) options, in case we need to implement cross-chain crypto assets.

![chainbridge](/images/chainbridge.png)

### Switch Chain

At the present, BOC works on Ethereum, BNB Chain and Polygon. If we need to switch chains, they can do it through `NETWORKS`.

![networkchange](/images/networkchange.png)

## Investment and Redemption

### Deposit

 Once the wallet has been successfully connected, we can complete the deposit by selecting the desired amount or selecting the "Max" balance, and then clicking on `DEPOSIT`.

![pic7](/images/pic-7.png)

### Withdrawal

After successfully connecting the wallet, we can complete the withdrawal by selecting the desired share or selecting the "maximum" share and clicking `WITHDRAW`.

![pic8](/images/pic-8.png)

### Withdrawal Advanced Parameters

![advancesetting](/images/advancesetting.png)

There are 3 advanced setup parameters:
<!-- TODO Ask Java -->
<!-- 1. **Exchanged**: Exchange function enablement. Each strategy in the BOC uses different stablecoins. When we withdraw money, we will do it according to the strategy APY from low to high. If a non-USDT strategy is obtained, the stable currency of the corresponding strategy will be returned, e.g. if Yearn LUSD is obtained, LUSD will be returned and if the exchange is closed, the corresponding value of LUSD will be returned to our account. If redemption is enabled, the Slippage parameter needs to be set. -->
- **Max Loss**: The maximum loss on withdrawals. When we specify the withdrawal share, the total assets at the current net value will be displayed, but these are not the funds we can finally get, and losses may occur during the withdrawal process, including exchange slippage losses. If our total assets are estimated to be $1000 at this time, and we choose Max Loss=0.3%, then we will get no less than $997.
- **Slippage**: [Slippage](appendix#slippage) between different currencies. After enabling Exchanged, we need to specify the slippage that we accept.

## Dashboard

From the [dashboard](appendix#dashboard) we can get the next relevant information about our assets and protocols that interact with them.

<https://dashboard.bankofchain.io>

![dashboard](/images/dashboard.jpg)

Each data is described as follows:

1. On-chain Vault lock-up amount, read the subgraph interface.
2. The number of investment users, read the subgraph interface.
3. APY for the last 30 days based on net worth.
4. Proportion of protocol funds, query the subgraph interface.
5. The total assets of each strategy, read the contract interface.
6. Official APY, regularly pulled every morning.
7. Currency standard weekly profit, weekly APY.
8. Strategy Address.
9. Vault operation records, displayed with the blockchain browser.

BOC subgraph:

- ETH: <https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-eth>

- BNB: <https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-bsc>

- POLYGON: <https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-matic>

## Policy Details

Take SushiUsdcUsdtStrategy as an example, enter the strategy details page as shown in the figure:

![detail](/images/detail.jpg)

Each data is described as follows:

1. Policy Details
      - Policy name
      - Stablecoins accepted by the strategy
      - The current total assets of the strategy (valued in USDT)
      - The total assets of the strategy's historical investment (valued in USDT)
2. Strategy Historical Return APY Performance
      - Historical official APY(yellow line)
      - Historical weekly APY(blue line)
3. Total Strategy Assets (Currency Standard)
4. Strategy operation asset changes (currency standard)
5. Policy Action Type
      - “harvest:: The strategy completes a mine sale and reinvestment, and reports the total asset valuation
      - “lend”: Vault puts funds into the strategy, and this action occurs in fund allocation (“doHardWork”, “allocation”)
      - “redeem”: Vault withdraws funds from the strategy, and this action occurs in the allocation of funds (“allocation”)

## Personal Investment Analysis

Enter the personal investment analysis page to see the personal investment income.

![personalpage](/images/personalpage.jpg)
Each data is described as follows:

1. Personal investment total asset valuation (calculated in USDT).
2. Acquired BOC share.
3. Pass 30 days [APY](appendix#annual-yield-apy).
4. Unwithdrawn earnings (calculated in USDT).
5. Withdrawn earnings (calculated in USDT).
6. Historical personal total assets.
7. Monthly income
