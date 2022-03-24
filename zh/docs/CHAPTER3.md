# 区块链选择标准 (Eth, polygon, BnB chain)

The first batch of the protocol will be connected to billion worth smart contract platforms including Ethereum, Polygon, BNB etc. Due to the immature cross-chain technology, users can access the official cross-chain bridge maunally for asset conversion.

第一批协议将连接到价值数十亿美元的智能合约平台，包括以太坊、多边形、BNB等。由于跨链技术不成熟，用户可以访问Maunly官方跨链桥进行资产转换。

The first batch of DEX and lending protocols are the best selected products on various blockchains, with a good record of operation.

第一批DEX和贷款协议是各种区块链上的最佳选择产品，具有良好的运营记录。

The protocol provides an optimal allocation service for the on-chain capital, which combines the principles of maximizing returns and diversifying capital risks.

该协议结合了收益最大化和资本风险分散的原则，为链上资本提供了最优分配服务。

1) Priority allocation to high-yield capital pools
2) The investment capital of a single capital pool cannot exceed 20% of the total investment assets
3) The investment of a single fund pool cannot exceed 50% of its existing lock-up amount
4) The investment funds of multiple fund pools in the same protocol cannot exceed 30% of the total investment assets
5) Evaluation are regularly perform to ensure the optimization with the allocation of funds, when the profit from relocation is greater than the cost of relocation.

1） 高收益资本池的优先分配

2） 单个资本池的投资资本不得超过总投资资产的20%

3） 单个基金池的投资不得超过其现有锁定金额的50%

4） 同一协议中多个基金池的投资资金不得超过总投资资产的30%

5） 当搬迁利润大于搬迁成本时，定期进行评估，以确保资金分配的优化。

The stablecoin exchanges are 1Inch and paraswap aggregators in order to reduce slippage.

stablecoin Exchange是1Inch和paraswap聚合器，以减少滑动。

(WARN_UNRECOGNIZED_ELEMENT: PAGE_BREAK)

Ethereum

Ethereum is open access to digital money and data-friendly services for everyone – no matter your background or location. It's a community-built technology behind the cryptocurrency ether (ETH) and thousands of applications you can use today.

以太坊对所有人开放数字货币和数据友好服务，无论你的背景或位置如何。它是加密货币以太（ETH）和数千个应用程序背后的社区构建技术。

An Open-source development is currently underway for a major upgrade to Ethereum known as Ethereum 2.0 or Eth2.[54] The main purpose of the upgrade is to increase transaction throughput for the network from the current of about 15 transactions per second to up to tens of thousands of transactions per second.

以太坊2.0或Eth2的主要升级目前正在进行开源开发。[54]升级的主要目的是将网络的事务吞吐量从当前每秒约15个事务增加到每秒数万个事务。

| 序号 | 协议                         | 合约                                       | 地址                                                         | 第三方协议合约                                               |                                                              |
| ---- | ---------------------------- | ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    |                              | Vault                                      | 0x008586B7f6768EDc269D9e5cd276316d33CECE6d                   |                                                              |                                                              |
| 2    | Balancer                     | Balancer3CrvStrategy                       | 0xa4bc7002d89ef7966c5b2fd70963eaa7a632bb19                   | Balancer: Vault ：0xBA12222222228d8Ba445958a75a0704d566BF2C8 |                                                              |
| 3    | DODO                         | DodoUsdtUsdcStrategy                       | 0x88b7068a365a92fe648c6d6a99cc58a583756df5                   | DSP：0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD DODOMine：0xaeD7384F03844Af886b830862FF0a7AFce0a632C |                                                              |
| 4    | DodoDaiUsdtStrategy          | 0xcace5387e7154594e0e95aa82f7779b2a0d8c9dc | DSP：0x3058EF90929cb8180174D74C507176ccA6835D73 DODOMine：0x1A4F8705E1C0428D020e1558A371b7E6134455A2 |                                                              |                                                              |
| 5    | SushiKashi                   | SushiKashiUsdcLinkStrategy                 | 0x839672fff7bf86a273c9c1eb4ee72ca2496c7142                   | KashiPairMediumRiskV1：0x4f68e70e3a5308d759961643AfcadfC6f74B30f4 | BentoBox：0xf5bce5077908a1b7370b9ae04adc565ebd643966 MasterChef：0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd |
| 6    | SushiKashiUsdtXsushiStrategy | 0xae4556510a43ff37df27d16a7ae8a08440a132da | KashiPairMediumRiskV1：0xC84Fb1F76cbdd3b3491E81FE3ff811248d0407e9 |                                                              |                                                              |
| 7    | SushiKashiUsdtWethStrategy   | 0x0adbfc6db10efd02786e3f590127079e74e4c128 | KashiPairMediumRiskV1：0xfF7D29c7277D8A8850c473f0b71d7e5c4Af45A50 |                                                              |                                                              |
| 8    | SushiKashiUsdcWethStrategy   | 0xfc3dd2cabf81999eb9e48ffb248ab048fccf348d | KashiPairMediumRiskV1：0xB7b45754167d65347C93F3B28797887b4b6cd2F3 |                                                              |                                                              |
| 9    | SushiKashiUsdcXsushiStrategy | 0x58c505ca34d908d7cb8349aaf6df7b942fe31a2e | KashiPairMediumRiskV1：0x6EAFe077df3AD19Ade1CE1abDf8bdf2133704f89 |                                                              |                                                              |
| 10   | Convex                       | ConvexIronBankKrwStrategy                  | 0xb7e3eb6bbdd0cb9206ebd7c4d8351b52f61ca42b                   | Iron Bank: iKrw：0x3c9f5385c288cE438Ed55620938A4B967c080101 Curve.fi Factory Plain Pool: ibKRW:0x8461A004b50d321CB22B7d034969cE6803911899 | Convex Finance: Booster ： 0xF403C135812408BFbE8713b5A23a04b3D48AAE31 |
| 11   | ConvexIronBankJpyStrategy    | 0x0e0963f34560bc337513319c4a7bf65f4c083907 | Iron Bank: iJPY ：0x215F34af6557A6598DbdA9aa11cc556F5AE264B1 Curve.fi Factory Plain Pool: ibJPY：0x8818a9bb44Fbf33502bE7c15c500d0C783B73067 |                                                              |                                                              |
| 12   | ConvexIronBankGbpStrategy    | 0x562c03b7822c9bcb9d19749a328d468eb8a15f48 | Iron Bank: iGBP ：0xecaB2C76f1A8359A06fAB5fA0CEea51280A97eCF Curve.fi Factory Plain Pool: ibGBP：0xD6Ac1CB9019137a896343Da59dDE6d097F710538 |                                                              |                                                              |
| 13   | ConvexIronBankEurStrategy    | 0x809491dc62e9177733e0ce11b0f73cd873d47ed3 | Iron Bank: iEUR ：0x00e5c0774A5F065c285068170b20393925C84BF3 Curve.fi Factory Plain Pool: ibEUR：0x19b080FE1ffA0553469D20Ca36219F17Fcf03859 |                                                              |                                                              |
| 14   | ConvexIronBankChfStrategy    | 0x560419b9183db2c9fb8ae32dbc93bef5b34c7826 | Iron Bank: iCHF ：0x1b3E95E8ECF7A7caB6c4De1b344F94865aBD12d5 Curve.fi Factory Plain Pool: ibCHF：0x9c2C8910F113181783c249d8F6Aa41b51Cde0f0c |                                                              |                                                              |
| 15   | ConvexIronBankAudStrategy    | 0xca41275733bba2831487206631cb46ad40bfda5d | Iron Bank: iUSDT ：0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a Curve.fi Factory Plain Pool: ibAUD：0x3F1B0278A9ee595635B61817630cC19DE792f506 |                                                              |                                                              |
| 16   | Convex3CrvStrategy           | 0x4d4700c777be1e11ec3af9465c90280788329964 | Curve.fi: DAI/USDC/USDT Pool 0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7 |                                                              |                                                              |
| 17   | ConvexBusdStrategy           | 0x264644dfbab5df335a05532a730421491808a7e5 | Curve.fi: BUSD Swap：0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27 |                                                              |                                                              |
| 18   | ConvexLusdStrategy           | 0x1f20dfb2b2ddbef30ea7c404d31970614dc5d6b5 | LUSD3CRV-f：0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA       |                                                              |                                                              |
| 19   | ConvexBusdV2Strategy         | 0x12896914a7fe92236d167c0c498b490d3aefd3e2 | Curve.fi: BUSD V2：0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a |                                                              |                                                              |
| 20   | ConvexYStrategy              | 0x22ffc3b6b250c8bedee7e67c8e3ca6e2aaac63a4 | Curve.fi: y Swap：0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51 |                                                              |                                                              |
| 21   | ConvexUsdtStrategy           | 0x23a25fa21584b4b8f1348ac74396bf0ee8a72b6f | Curve.fi: USDT Swap ：0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C |                                                              |                                                              |
| 22   | ConvexTusdStrategy           | 0x968ebccd0e77644242ffb4468abe93774f75f34f | TUSD3CRV-f：0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1       |                                                              |                                                              |
| 23   | ConvexPaxStrategy            | 0xf08fda0293cc8706ae1e280a9dc194c137cb63be | pax-usdp3：0xc270b3B858c335B6BA5D5b10e2Da8a09976005ad        |                                                              |                                                              |
| 24   | ConvexCompoundStrategy       | 0x02733188d0cbc87b4046b5ad12b9f3c8f3879c14 | Curve.fi: Compound Swap ：0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56 |                                                              |                                                              |
| 25   | ConvexAaveStrategy           | 0x7f3bd67d7366dbc6b149f606cfa9c8fcdb72d9e2 | Curve.fi: aDAI/aUSDC/aUSDT Pool ：0xDeBF20617708857ebe4F679508E7b7863a8A8EeE |                                                              |                                                              |
| 26   | Yearn                        | YearnEarnTusdStrategy                      | 0x5c09ab7a2e09cc0f1d2e7f7ed189a7477c8e9623                   | yearn: yTUSD Token ：0x73a052500105205d34Daf004eAb301916DA8190f |                                                              |
| 27   | Guni                         | GUniUsdcDai100Strategy                     | 0x6488b7756e4338d73b85c61a67ca33921be59c88                   | Gelato Uniswap DAI/USDC LP (G-UNI)：0x50379f632ca68D36E50cfBC8F78fe16bd1499d1e |                                                              |

Polygon

Polygon is a developer-first hybrid POS+Plasma side-chain on top of Ethereum, enabling Ethereum developers to scale their dApps for large-scale usage. It is a network and framework for creating and linking Ethereum-compatible blockchains.

Polygon是开发人员在以太坊顶部的第一个混合POS+Plasma侧链，使以太坊开发人员能够扩展其DAPP以供大规模使用。它是一个用于创建和链接以太坊兼容区块链的网络和框架。

Consensus on the Polygon network is reached through validators in a Proof of Stake (PoS) mechanism. The cost on Polygon is low, in just a fraction of a cent. Speed Transaction times on Polygon are also near instantaneous. The native token of Polygon is the Matic token, a legacy from the fact that Polygon was born out of the Matic project. As a layer 2 for Ethereum, Polygon supports the ERC20 and ERC721 token standards.

Polygon 网络的共识是通过权益证明（PoS）机制中的验证器达成的。多边形的成本很低，仅需几分之一美分。多边形上的速度事务处理时间也接近瞬时。Polygon的原生标记是Matic标记，这是Polygon从Matic项目中诞生的事实遗留下来的。作为以太坊的第二层，Polygon支持ERC20和ERC721令牌标准。

| 序号 | 协议                      | 合约                                       | 地址                                                       | 第三方协议合约                                               |                                                              |
| ---- | ------------------------- | ------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | Vault                     | Vault                                      | 0xFB7f340A7DEfD3bB0072844db6D5EbdFAD765dea                 |                                                              |                                                              |
| 2    | Curve                     | Curve3CrvStrategy                          | 0x1f84a8c8c31674b89a4723521ead5a48579b8bf7                 | Curve.fi: Aave Pool: 0x445FE580eF8d70FF569aB36e80c647af338db351 Curve.fi: Aave Gauge: 0x19793B454D3AfC7b454F206Ffe95aDE26cA6912c |                                                              |
| 3    | Aave                      | AaveUsdtStrategy                           | 0xb80a44d494acb8db24ff7047514a16bb554290e4                 | Aave: Lending Pool V2: 0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf Aave: Incentives Controller V2: 0x357D51124f59836DeD84c8a1730D72B749d8BC23 |                                                              |
| 4    | AaveUsdcStrategy          | 0x5c9a02f7a45c5407bef7e98d69ca324a29803b15 |                                                            |                                                              |                                                              |
| 5    | Balancer                  | BalancerUsdcUsdtDaiTusdStrategy            | 0x23c75b1397ad73b3b572ccc9c3eb3ecede9682c4                 | Balancer: Vault ：0xBA12222222228d8Ba445958a75a0704d566BF2C8 |                                                              |
| 6    | Quickswap                 | QuickswapDaiUsdtStrategy                   | 0xd55001d2508b58a7bc197c50c64ebbd0ae587300                 | StakingRewards: 0xc45aB79526Dd16B00505EB39222E6B1Aed0Ef079   | QuickSwap: Router: 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff |
| 7    | QuickswapUsdcDaiStrategy  | 0x73341635f65cb51b450288bfcca653ba4fdaa261 | StakingRewards: 0xACb9EB5B52F495F09bA98aC96D8e61257F3daE14 |                                                              |                                                              |
| 8    | QuickswapUsdcUsdtStrategy | 0xa3851408642cbe4babf85514f92f06c6fcef0cdf | StakingRewards: 0xAFB76771C98351Aa7fCA13B130c9972181612b54 |                                                              |                                                              |
| 9    | Sushi                     | SushiUsdcUsdtStrategy                      | 0x4717eaa5da97f11bda3a3f021a20fd8cb72eab64                 | SushiSwap: Router: 0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506 SushiSwap: MiniChef: 0x0769fd68dFb93167989C6f7254cd0D766Fb2841F |                                                              |
| 10   | SushiUsdcDaiStrategy      | 0xce531a4ecd1143b93dffaa054245a8f27a3e03fe |                                                            |                                                              |                                                              |
| 11   | Synapse                   | Synapse4UStrategy                          | 0x38d77bbfb522844e50dae8ec8ec62942d0de98c0                 | SwapFlashLoan: 0x85fCD7Dd0a1e1A9FCD5FD886ED522dE8221C3EE5 Synapse: MiniChef: 0x7875Af1a6878bdA1C129a4e2356A3fD040418Be5 |                                                              |
| 12   | Dodo                      | DodoUsdtUsdcStrategy                       | 0x257223fcc6f33e5067260c9c18620d2f6d524b61                 | DODO：0x813FddecCD0401c4Fa73B092b074802440544E52 DODOMine：0xB14dA65459DB957BCEec86a79086036dEa6fc3AD |                                                              |



BNB

Binance BNB was founded in August 2020 and massively gained in popularity in the first quarter of 2021 because of the high gas fees and slow transaction confirmations on the Ethereum blockchain. BNB operates similarly to the Ethereum ecosystem, because it is EVM-compatible, meaning Ethereum smart contracts are fully compatible, with additional tweaks to make the blockchain faster.

BIANCE BNB成立于2020年8月，在2021季度第一季度大规模普及，这是因为EASUM BEAM链上的高气体费和缓慢的交易确认。BNB的运营方式与以太坊生态系统类似，因为它与EVM兼容，这意味着以太坊智能合约完全兼容，并通过其他调整加快区块链.

| 序号 | 协议                    | 合约                                       | 地址                                               | 第三方协议合约                                               |                                                              |
| ---- | ----------------------- | ------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    |                         | Vault                                      | 0x699F86dd50224544E6c23670Af44682CAe9db3c5         |                                                              |                                                              |
| 2    | Pancake                 | PancakeDaiBusdStrategy                     | 0x3fa2b30bfa5816b115b648d42955d3c3cb7bc368         | PancakeSwap: Router v2 ：0x10ED43C718714eb63d5aA57B78B54704E256024E PancakeSwap: Main Staking Contract ：0x73feaa1eE314F8c655E354234017bE2193C9E24E |                                                              |
| 3    | PancakeTusdBusdStrategy | 0x3c87c8a62bc56b9663a256999c5aa333ce459857 |                                                    |                                                              |                                                              |
| 4    | PancakeUsdcBusdStrategy | 0x05898f26ebfb39de28c55a7dc3d2ff062aa8defa |                                                    |                                                              |                                                              |
| 5    | PancakeUsdcUsdtStrategy | 0x06695568007119a0f79720cb0ad481c9ce640e9c |                                                    |                                                              |                                                              |
| 6    | PancakeUsdtBusdStrategy | 0xeccc75f9e1ba708c25202c744ea61dc93dc9a2f0 |                                                    |                                                              |                                                              |
| 7    | Alpaca                  | AlpacaTusdStrategy                         | 0x7983b99faf9854d82bbd100302defff4f6fd9b51         | ibTUSD：0x3282d2a151ca00BfE7ed17Aa16E42880248CD3Cd           | Alpaca Finance: Fairlaunch ：0xA625AB01B08ce023B2a342Dbb12a16f2C8489A8F |
| 8    | AlpacaUsdtStrategy      | 0x568dced4cb4114359854f052fc5b776f6c6d12dc | ibUSDT：0x158Da805682BdC8ee32d52833aD41E74bb951E59 |                                                              |                                                              |
| 9    | AlpacaBusdStrategy      | 0x8178f4a3c7acc168cba50c8a70b4de8b63d6d892 | ibBUSD：0x7C9e73d4C71dae564d41F78d56439bB4ba87592f |                                                              |                                                              |
| 10   | Venus                   | VenusTusdStrategy                          | 0x175724af9ec5e3e7b71934d31b5db4f8c4146db4         | vTUSD：0x08CEB3F4a7ed3500cA0982bcd0FC7816688084c3            |                                                              |
| 11   | VenusUsdtStrategy       | 0x21b31dc834588f81d2ae3fe64f3ce3c5bdbd070d | VUSDT：0xfD5840Cd36d94D7229439859C0112a4185BC0255  |                                                              |                                                              |
| 12   | VenusUsdcStrategy       | 0x1623cb1cd01e01d0dff7e5091197a8e261fb5596 | vUSDC：0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8  |                                                              |                                                              |
| 13   | VenusDaiStrategy        | 0xc0ce366cedbe7ba63036820c72c1ea7bccd8963f | vDAI：0x334b3eCB4DCa3593BCCC3c7EBD1A1C1d1780FBF1   |                                                              |                                                              |
| 14   | VenusBusdStrategy       | 0x65ab000d3474dcd0fa347935dba68f0dda354c88 | vBUSD：0x95c78222B3D6e262426483D42CfA53685A67Ab9D  |                                                              |                                                              |
| 15   | Belt                    | Belt4BeltStrategy                          | 0xa59d8ff6c63eefc8001c8d5501bde62fca564bc6         | beltPair：0xF6e65B33370Ee6A49eB0dbCaA9f43839C1AC04d5 MasterBelt：0xD4BbC80b9B102b77B21A06cb77E954049605E6c1 |                                                              |
| 16   | DODO                    | DodoBusdUsdcStrategy                       | 0x466cc0484a2077b769420bec7b0620bba5ffebd1         | DODO：0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10             | DODOMine：0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750         |
| 17   | DodoBusdUsdtStrategy    | 0xd1f9f90492ad3fccf0f1772be9f0a6bdaed27e84 | DODO：0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7   |                                                              |                                                              |
| 18   | DForce                  | DForceLendBusdStrategy                     | 0x5960f21b3e388f4435ad61cb6b74440cb93de232         | iBUSD：0x5511b64Ae77452C7130670C79298DEC978204a47            |                                                              |
| 19   | DForceLendDaiStrategy   | 0x1a235ea7fee8ed513c271d19f46d8a66c66aacbc | iDAI：0xAD5Ec11426970c32dA48f58c92b1039bC50e5492   |                                                              |                                                              |
| 20   | DForceLendUsdcStrategy  | 0xdabf728c63e50c8655bd591200cdaed850270f97 | iUSDC：0xAF9c10b341f55465E8785F0F81DBB52a9Bfe005d  |                                                              |                                                              |
| 21   | DForceLendUsdtStrategy  | 0xf0565751ed9cf38763a34a695060536092b4aa2f | iUSDT：0x0BF8C72d618B5d46b055165e21d661400008fa0F  |                                                              |                                                              |
| 22   | Synapse                 | Synapse4UStrategy                          | 0x1d63e9ef24a41582b003c3908b685fa9e9655e2b         | SwapFlashLoan：0x28ec0B36F0819ecB5005cAB836F4ED5a2eCa4D13 Synapse: MiniChef ：0x8F5BBB2BB8c2Ee94639E55d5F41de9b4839C1280 |                                                              |


## Incorporated protocols and specific yield generating pools

Balancer

Balancer protocol is a non-custodial portfolio manager, liquidity provider, and price sensor with customizable number of assets and weights within a pool. Trade against all pools in the Balancer ecosystem for best price execution where pools are controlled by smart contracts that can be implemented at any arbitrary trading strategy or logic. Trades are split through an SOR which performs an optimization across all pools for best price execution. Frontends are open-source and will be made available through IPFS.

平衡器协议是一个非托管的投资组合管理器、流动性提供者和价格传感器，在一个池中具有可定制的资产数量和权重。针对平衡器生态系统中的所有池进行交易，以获得最佳价格执行，其中池由智能合约控制，智能合约可在任意交易策略或逻辑下实施。交易通过SOR进行拆分，SOR在所有池中执行优化，以实现最佳价格执行。前端是开源的，将通过IPFS提供。

<https://app.balancer.fi/#/>

Aave

Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets. Aave is a decentralized non-custodial money market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion. At Aave, the funds are stored in a non-custodial smart contract on the Ethereum blockchain and regulated and auditable by code. To ensure top notch security, Aave Protocol has had audits by trail of bits, open zeppelin, consensys diligence, certik, peckshield and certora. All audits are publicly available.

Aave是一种开源的非托管流动性协议，用于赚取存款和借款资产的利息。Aave是一种分散的非托管货币市场协议，用户可以作为储户或借款人参与。储户向市场提供流动性以赚取被动收入，而借款人能够以过度抵押（永久性）或欠抵押（一次性流动性）的方式借款。在Aave，资金存储在以太坊区块链上的非托管智能合约中，并通过代码进行监管和审计。为了确保一流的安全性，Aave协议已经通过bits、open zeppelin、consensys diligence、certik、peckshield和certora进行了审计。所有审计都是公开的。

<https://aave.com/>

Convex
Convex allows Curve.fi liquidity providers to earn trading fees and claim boosted CRV without locking CRV themselves. Liquidity providers can receive boosted CRV and liquidity mining rewards with minimal effort. Convex also lets users receive trading fees as well as a share of boosted CRV received by liquidity providers.  Convex has no withdrawal fees and minimal performance fees which is used to pay for gas and distributed to CVX stakers. CRV stakers and liquidity providers also receive liquidity mining rewards in the form of CVX. Convex allows liquidity providers to earn trading fees and claim boosted CRV without locking CRV themselves.

凸曲线。金融机构流动性提供商赚取交易费用，并在不锁定CRV的情况下提高CRV。流动性提供者可以通过最少的努力获得更高的CRV和流动性挖掘奖励。凸面还允许用户获得交易费用，以及流动性提供商获得的提振CRV份额。凸面无取款费和最低绩效费，用于支付天然气费用并分配给CVX储户。CRV储户和流动性提供者还可以获得CVX形式的流动性挖掘奖励。凸面允许流动性提供商赚取交易费用，并在不锁定CRV的情况下申请增加的CRV。

<https://www.convexfinance.com/>

UniswapV2
As a venue for pooled, automated liquidity provision on Ethereum, the Uniswap protocol (Uniswap) functions without upkeep, providing an unstoppable platform for ERC20 token conversion.  Uniswap V2 is the second iteration of Uniswap and includes many new features and improvements.

Uniswap协议（Uniswap）是以太坊上汇集、自动提供流动性的场所，无需维护即可运行，为ERC20代币转换提供了一个不可阻挡的平台。Uniswap V2是Uniswap的第二次迭代，包括许多新功能和改进。

<https://uniswap.org/blog/uniswap-v2>

UniswapV3
As a venue for pooled, automated liquidity provision on Ethereum, the Uniswap protocol (Uniswap) functions without upkeep, providing an unstoppable platform for ERC20 token conversion.  Uniswap V3 is the third iteration of Uniswap and includes many new features and improvements.

As a venue for pooled, automated liquidity provision on Ethereum, the Uniswap protocol (Uniswap) functions without upkeep, providing an unstoppable platform for ERC20 token conversion.  Uniswap V3 is the third iteration of Uniswap and includes many new features and improvements.



<https://uniswap.org/blog/uniswap-v3>

Dodo
DODO is an On-Chain Liquidity Provider for everyone.DODO Aims to be the Best Decentralize Exchange (DEX) Ranking based on trading volumes.

DODO是一家面向所有人的链上流动性提供商。DODO的目标是成为基于交易量的最佳分散交易所（DEX）排名。

<https://dodoex.io/zh>

Sushi_Kashi

Kashi is a lending and margin trading platform, built on the BentoBox, that allows for anyone to create customized and gas-efficient markets for lending, borrowing, and collateralizing a variety of DeFi tokens, stable coins, and synthetic assets.

喀什是一个建立在BentoBox基础上的借贷和融资融券交易平台，任何人都可以为各种DeFi代币、稳定硬币和合成资产的借贷和抵押创建定制且高效的市场。

<https://docs.sushi.com/products/kashi-lending>

YearnEarn
Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain. The protocol is maintained by various independent developers and is governed by YFI token holders.

Dream Finance是分散金融（DeFi）中的一套产品，在以太坊区块链上提供贷款聚合、收益产生和保险。该协议由不同的独立开发者维护，并由YFI令牌持有者管理。

<https://yearn.finance/#/home>

YearnV2
Yearn Earn V2 is a suite of products providing lending aggregation, yield generation, and insurance on the Ethereum blockchain.  With DeFi Earn integration, we handle the deposit and withdrawal process with Yearn Earn V2 natively on the DeFi Wallet app, hence you don’t have to worry about dealing with smart contract calls and we simplify the concept of yTokens and display the estimated interest you’re earning over time.

Drearn Earn V2是一套在以太坊区块链上提供贷款聚合、收益率生成和保险的产品。通过DeFi Earn集成，我们可以在DeFi Wallet应用程序上通过Dream Earn V2本机处理存款和取款过程，因此您不必担心处理智能合约通话，我们简化了yTokens的概念，并显示您随着时间的推移所赚取的估计利息。

<https://yearn.finance/#/home>

## Incorporated Stablecoins

The first collection of live assets were stable coins pegged to the US dollar. Since BlockBank supports multi-chain asset management, each chain is backed by a basket of selected USD stable coins. Each asset in the vault has a set of maximum and minimum weights.

第一批活资产是与美元挂钩的稳定硬币。由于区块银行支持多链资产管理，每条链都有一篮子选定的美元稳定硬币作为后盾。vault中的每个资源都有一组最大和最小权重。

The assets currently go live include:

### DAI

Dai is created from an overcollateralized loan and repayment process facilitated by MakerDAO's smart contracts in the form of a decentralized application.Dai是由MakerDAO的智能合同以分散应用程序的形式促成的超额抵押贷款和还款流程创建的。

<https://makerdao.com/en/>

### USDC

USDC was first announced on 15 May 2018 by Circle and was launched in September of 2018.美国农业部于2018年5月15日由Circle首次宣布，并于2018年9月启动。

<https://www.centre.io/usdc>

### USDT

Tether (USDT) is a cryptocurrency that is hosted on the Ethereum and Bitcoin blockchains.  Its tokens are issued by Tether Limited, which in turn is controlled by the owners of Bitfinex.Tether（USDT）是一种托管在以太坊和比特币区块链上的加密货币。其代币由Tether Limited发行，而Tether Limited又由Bitfinex的所有者控制。

<https://tether.to/en/>

### BUSD

Binance USD (BUSD) is a new stablecoin developed in partnership between Binance and Paxos. It is backed 1:1 by U.S. dollars.Binance USD（BUSD）是Binance和Paxos合作开发的新stablecoin。它以1:1的美元作后盾。

<https://www.binance.com/en/busd>

### USDP

Founded in September of 2018, Pax Dollar (USDP) is a fiat-collateralized stablecoin that offers the advantage of transacting with blockchain assets through minimized price risk.Pax Dollar（USDP）成立于2018年9月，是一种菲亚特抵押的stablecoin，通过最小化价格风险提供与区块链资产交易的优势。

<https://paxos.com/usdp/>

### TUSD

TrueUSD was launched by TrustToken on 5 March 2018 on Bittrex and quickly grew.TrueUSD由TrustToken于2018年3月5日在Bittrex上推出，并迅速增长。

<https://www.trusttoken.com/>

### LUSD

LUSD is a fully redeemable USD-pegged stablecoin issued by the Liquity Protocol.LUSD是由Liquity协议发行的可完全赎回的美元挂钩stablecoin。

<https://www.liquity.org/>
