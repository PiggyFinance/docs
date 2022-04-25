---
sidebar_position: 4
---

# Protocol Algorithm Design

## Process Description

![pic-2](/images/pic-2.png)

1. “Deposit” - The BOC protocol supports users to `deposit` the three major stablecoins (USDT, USDC, DAI) in any combination and in any amount, and mint USDi of corresponding value to return to the user.<br />“Withdraw” - Users can `withdraw` USDi all the three major stablecoins at any time through the BOC protocol. By default, they will be returned according to the proportion of the three major stablecoins in the [Vault](appendix#vaults) at that time, or they can specify a certain currency to be returned.
2. After Vault receives the stablecoin, `queryTokenPrice` queries the price of the user's transfer of the [stablecoin](appendix#stablecoin) through an external oracle. When the price returned by the [oracle](appendix#oracle) is higher than 1 USD, it is calculated at 1 USD, and when it is lower than 1 USD, it is calculated at the price of the [oracle](appendix#oracle).
3. Based on the calculated value, `mint/burn` will [mint/burn](appendix#burnmint) an equivalent value of USDi.
4. The [Keeper](appendix#keeper) module reaches the trigger condition of `doHardWork` and triggers `doHardWork`.
5. Vault calls the aggregate exchange module `swapTokenToWants`.
6. The aggregated exchange module `swapTokens` completes the exchange.
7. Vault receives the target currency exchanged by the aggregate exchange module.
8. Vault puts stablecoin `deposits` into the strategy according to the currency required by the strategy.
9. The [strategy](appendix#strategy) invests stablecoin `deposits` into third-party protocols.
10. The Keeper module reaches the `harvest` trigger condition and triggers the `harvest`.
11. Harvester triggers each strategy to execute `harvest`.
12. Each strategy executes `claimRewards` to collect mining.
13. Each strategy transfers mining coins `transferRewards` to Harvester.
14. Harvester sells miner `sellRewards` into stablecoins through aggregated exchange.
15. Harvester `sendProfitToVault` transfers stablecoins into Vault.
16. The Keeper module reaches the `rebase` trigger condition and triggers the `rebase`.
17. Vault calls `changeTotalSupply` to issue additional USDi.
18. Vault collects a portion of the proceeds, which is transferred to the treasury called `Treasury`.
19. The [treasury](appendix#daos-treasury) will benefit users from using `buyback` to repurchase the BOC governance token.

## Harvest

The `harvestTrigger` is triggered every day to determine whether the `harvest` condition is met. The two harvest conditions are:

1. Maximum time interval is exceeded.
2. The harvest rule met:
$$
Profit \times 20\%  > harvest cost
$$

If any of the above conditions are met, user can do `harvest` work:

1. Execute the yield transfer Harvester (for the strategy with yield production and reach the yield selling threshold);
2. Report the current asset from the strategy.

<table>
<tr>
<td>Set parameters</td>
<td>ETH</td>
<td>BNB Chain</td>
<td>Polygon</td>
</tr>
<tr>
<td>Scheduled task trigger cycle</td>
<td>6:00 am every day</td>
<td>6:00 am every day</td>
<td>6:00 am every day</td>
</tr>
<tr>
<td>Maximum time interval for triggering policy “harvest” (if the interval between current “harvest” and last “harvest” is greater than this value, “harvest” must be done) </td>
<td>2.5 days</td>
<td>2.5 days</td>
<td>2.5 days</td>
</tr>
<tr>
<td>The benefit-cost ratio factor X of the trigger strategy “harvest” (“harvest” profit>=cost*X, then “harvest” can be done.)</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</table>

## Rebase

When the total assets of the Vault are greater than the total issuance of USDi, it means that new income has been generated. At this time, the value of USDi compared with the US dollar will be revised, and the number of USDi will be increased, so that the total value of USDi is consistent with the total value of Vault assets, ensuring 1 USDi is anchored at 1USD. At the same time, 20% of the additional USDi will be transferred to the DAO treasury as a management fee.

## Fund Allocation

### doHardWork

The input into the position adjustment of the algorithm are the official [APY](appendix#annual-yield-apy) of the third-party protocol, the gas required for investment of each strategy, the limit of exchange [slippage](appendix#slippage), and the [rules of fund allocation](introduction-to-boc#fund-allocation-rules), and the strategy and amount of the funds to be invested are the output.

<table>
<tr>
<td>Set parameters</td>
<td>ETH</td>
<td>BNB Chain</td>
<td>Polygon</td>
</tr>
<tr>
<td>Scheduled Task Trigger Cycle</td>
<td>7 am every Wed. & Sat.</td>
<td>7 am every Wed. & Sat.</td>
<td>7 am every Wed. & Sat.</td>
</tr>
<tr>
<td>Cost-benefit Calculation Period X (If the profit of investment X days >= cost, “doHardwork” can be done)</td>
<td>365 days</td>
<td>365 days</td>
<td>365 days</td>
</tr>
</table>

### Allocation

Compared with `doHardWork`, `allocation` has done one more step: take out the funds of the low APY strategy, and then use the official APY of the third-party agreement, the gas required for investment of each strategy, the exchange slippage limit, fund allocation rules, the position adjustment algorithm as an input, and the output is the strategy and the amount of the awaiting investment funds.

| Set parameters                                                                                            | ETH               | BNB Chain         | Polygon           |
| --------------------------------------------------------------------------------------------------------- | ----------------- | ----------------- | ----------------- |
| Pre-adjusted position report trigger timing                                                               | 6:50 am every day | 6:50 am every day | 6:50 am every day |
| Scheduled task trigger cycle                                                                              | 7 am every Monday | 7 am every Monday | 7 am every Monday |
| Cost-benefit calculation period X (If the profit of rebalancing X days >= cost, “allocation” can be done) | 30 days           | 30 days           | 30 days           |

### Fund allocation Algorithm

| Variable     | Meaning|
| ------------ | -------------- |
| "durationDays" | The cycle of rebalancing needs to ensure that in a cycle after rebalancing, the profit after rebalancing - the profit before rebalancing - the cost of rebalancing > 0|
| "yearDays"     | 365days|
| "asset1"       | The original assets of the strategy|
| "apr1"         | The strategy apr before the position adjustment (APY needs to be converted into apr), the current value of the APY of the position adjustment algorithm is the 7-day average of APY calculated outside the strategy chain |
| "deltaAsset"   | Assume the capital change value of the strategy rebalancing|
| "poolAssets1"  | The TVL of the strategic target investment pool is used as a parameter for the change of apr after the position adjustment||

Profit before position adjustment

$$
gain1 = \frac{asset1 \times apr1 \times durationDays}{yearDays}
$$

Changed earnings

$$
gain2 = \frac{ (asset1+deltaAsset-exchangeLoss)\times apr2 \times durationDays}{yearDays}
$$

changed apr

$$
apr2 = \frac{apr1 \times poolAssets1}{(poolAssets1+deltaAsset-exchangeLoss)}
$$

After substituting apr2 in gain2 using the above equation:

$$
gain2=\frac{apr1 \times durationDays/yearDays \times (asset1+deltaAsset) \times poolAssets1}{poolAssets1+deltaAsset-exchangeLoss}
$$

Then the relationship between the changed income of a single strategy and the changed assets is:

$$
deltaGain = gain2-gain1 = \frac{deltaAsset \times (poolAsset1-asset1) \times apr1 \times durationDays}{(poolAsset1+deltaAsset-exchangeLoss) \times yearDays}
$$

Cost of changing funds for a single strategy

| variable name    | Details                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| withdrawFee      | Withdrawal Fund Handling Fee                                                                   |
| lendFee          | Additional capital operation fee                                                               |
| exchangeLoss     | Exchange currency slippage loss                                                                |
| harvestFee       | “harvest” Funding Fees                                                                         |
| profitChangeFee  | Capital change cost                                                                            |
| withdrawGas      | withdrawGas is the gas consumed by the “withdraw” operation, which is estimated by pre-testing |
| lendGas          | lendGas is the gas consumed by the “lend” operation, which is estimated by pre-testing         |
| exchangeLossRate | Redeem Slippage                                                                                |

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

Find the maximum sum of deltaGain for all strategies:

$$
profitChange=MAX\sum_{i=1}^m(deltaGain_i -withdrawFee_i-lendFee_i - exchangeLoss_i-harvestFee_i)
$$

$$
profitChange=MAX\sum_{i=1}^m(\frac{deltaAsset_i \times (poolAsset_i-asset_i) \times apr_i * durationDays_i}{(poolAsset_i+deltaAsset_i-exchangeLoss_i) \times yearDays_i} 
$$

$$
- operateFee_i - exchangeLoss_i - harvestFee_i)
$$

Total Change Profit ProfitChange
In this formula, the only variable is the deltaAsset for each strategy. At the same time, the solution needs to be limited by

Restrictions

1. The same protocol strategy (multiple constraints) funds do not exceed 30% of the total funds
2. The sum of all asset changes in and out is 0

Boundary conditions

1. Strategic assets cannot exceed 20% of total assets
2. The strategic funds cannot exceed 50% of the target pool assets

Use python scipy's `optimize.minimize` to find the current optimal rebalancing scheme.

### Public Parameter Configuration

| Set parameters                                                                                | ETH        | BNB Chain  | Polygon    |
| --------------------------------------------------------------------------------------------- | ---------- | ---------- | ---------- |
| Fund allocation calculation Exchange slippage settings                                        | 0.25%      | 0.25%      | 0.25%      |
| Gas configuration (including strategy deposit and withdrawal Gas, exchange Gas, harvest cost) | Actual Gas | Actual Gas | Actual Gas |

### Official APY Calculation Rules

The official APY are needed as a reference when allocating funds. The sources of official APY are as follows: vfat.tools, coingecko, zapper, Official APY, apy.vision Fee, etc. If the official APY source channel does not include the APY calculation of the protocol strategy, the BOC directly copies the official APY calculation rules of the protocol strategy. Generally speaking, the official APY of the protocol strategy consists of market-making revenue and mining coin revenue. Taking the “ConvexLusdStrategy” strategy that BOC has already docked as an example, its APY consists from the contents of following table:

<table>
<tr>
<td>APY Mark</td>
<td>APR</td>
<td>APY</td>
<td>Compound Interest</td>
<td>Calculation Method</td>
<td>Data Source</td>
</tr>
<tr>
<td>Trx Fee</td>
<td>0.0024</td>
<td>Tx Fee</td>
<td>N</td>
<td>API</td>
<td>https://www.convexfinance.com/api/curve-apys</td>
</tr>
<tr>
<td>crv</td>
<td>0.023523458</td>
<td>cvx mining coins</td>
<td>Y</td>
<td>API</td>
<td>https://www.convexfinance.com/api/curve-apys</td>
</tr>
<tr>
<td>cvx</td>
<td>0.024132445</td>
<td>cvx mining coins</td>
<td>Y</td>
<td>Contract Calculation</td>
<td>Issued according to time, one-year mining coin price/total pool assets can get APR</td>
</tr>
</table>

$$
APY=(1+APR)^{periods}-1
$$

The “periods” parameter is the interest payment period.

### Policy Actual APY Calculation Rules

The actual APY of the strategy is calculated based on the standard return of the strategy currency.
