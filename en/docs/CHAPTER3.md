# Selection criteria for implemented Blockchains (Eth, polygon, BnB chain)

The first batch of the protocol will be connected to billion worth smart contract platforms including Ethereum, Polygon, BNB etc. Due to the immature cross-chain technology, users can access the official cross-chain bridge maunally for asset conversion.

The first batch of DEX and lending protocols are the best selected products on various blockchains, with a good record of operation.

The protocol provides an optimal allocation service for the on-chain capital, which combines the principles of maximizing returns and diversifying capital risks.

1) Priority allocation to high-yield capital pools

2) The investment capital of a single capital pool cannot exceed 20% of the total investment assets

3) The investment of a single fund pool cannot exceed 50% of its existing lock-up amount

4) The investment funds of multiple fund pools in the same protocol cannot exceed 30% of the total investment assets

5) Evaluation are regularly perform to ensure the optimization with the allocation of funds, when the profit from relocation is greater than the cost of relocation.

The stablecoin exchanges are 1Inch and paraswap aggregators in order to reduce slippage.

(WARN_UNRECOGNIZED_ELEMENT: PAGE_BREAK)

Ethereum

Ethereum is open access to digital money and data-friendly services for everyone – no matter your background or location. It's a community-built technology behind the cryptocurrency ether (ETH) and thousands of applications you can use today.

An Open-source development is currently underway for a major upgrade to Ethereum known as Ethereum 2.0 or Eth2.[54] The main purpose of the upgrade is to increase transaction throughput for the network from the current of about 15 transactions per second to up to tens of thousands of transactions per second.

<table>
<tr>
<td>Sequence</td>
<td>Protocol</td>
<td>Contract</td>
<td>Address</td>
<td colspan="2">3rd party Protocol Contract</td>
</tr>
<tr>
<td>1</td>
<td></td>
<td>Vault</td>
<td>0x008586B7f6768EDc269D9e5cd276316d33CECE6d</td>
<td></td>
<td></td>
</tr>

<tr>
<td>2</td>
<td>Balancer</td>
<td>Balancer3CrvStrategy</td>
<td>0xa4bc7002d89ef7966c5b2fd70963eaa7a632bb19</td>
<td>Balancer: Vault ：0xBA12222222228d8Ba445958a75a0704d566BF2C8</td>
<td></td>
</tr>

<tr>
<td>3</td>
<td rowspan="2">DODO</td>
<td>DodoUsdtUsdcStrategy</td>
<td>0x88b7068a365a92fe648c6d6a99cc58a583756df5</td>
<td>DSP: 0xC9f93163c99695c6526b799EbcA2207Fdf7D61aD DODOMine：0xaeD7384F03844Af886b830862FF0a7AFce0a632C</td>
<td></td>
</tr>

<tr>
<td>4</td>
<td>DodoDaiUsdtStrategy</td>
<td>0xcace5387e7154594e0e95aa82f7779b2a0d8c9dc</td>
<td>DSP：0x3058EF90929cb8180174D74C507176ccA6835D73 DODOMine：0x1A4F8705E1C0428D020e1558A371b7E6134455A2</td>
<td></td>

</tr>

<tr> <td>5</td> <td rowspan="5"> SushiKashi </td> <td>SushiKashiUsdcLinkStrategy </td> <td>0x839672fff7bf86a273c9c1eb4ee72ca2496c7142 </td><td> KashiPairMediumRiskV1：0x4f68e70e3a5308d759961643AfcadfC6f74B30f4 </td><td rowspan="5"> BentoBox：0xf5bce5077908a1b7370b9ae04adc565ebd643966 MasterChef：0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd </td></tr>

<tr>

<td>6</td>
<td>SushiKashiUsdtXsushiStrategy</td>
<td>0xae4556510a43ff37df27d16a7ae8a08440a132da</td>
<td>KashiPairMediumRiskV1：0xC84Fb1F76cbdd3b3491E81FE3ff811248d0407e9</td>
</tr>
<tr>

<td>7</td>
<td>SushiKashiUsdtWethStrategy</td>
<td>0x0adbfc6db10efd02786e3f590127079e74e4c128</td>
<td>KashiPairMediumRiskV1：0xfF7D29c7277D8A8850c473f0b71d7e5c4Af45A50</td>
</tr>

<tr>
<td>8</td>
<td>SushiKashiUsdcWethStrategy</td>
<td>0xfc3dd2cabf81999eb9e48ffb248ab048fccf348d</td>
<td>KashiPairMediumRiskV1：0xB7b45754167d65347C93F3B28797887b4b6cd2F3</td>
</tr>

<tr>
<td>9</td>
<td>SushiKashiUsdcXsushiStrategy</td>
<td>0x58c505ca34d908d7cb8349aaf6df7b942fe31a2e</td>
<td>KashiPairMediumRiskV1：0x6EAFe077df3AD19Ade1CE1abDf8bdf2133704f89</td>
</tr>

<tr>
<td>10</td>
<td rowspan="16">Convex</td>
<td>ConvexIronBankKrwStrategy</td>
<td>0xb7e3eb6bbdd0cb9206ebd7c4d8351b52f61ca42b</td>
<td>Iron Bank: iKrw：0x3c9f5385c288cE438Ed55620938A4B967c080101 Curve.fi Factory Plain Pool: ibKRW:0x8461A004b50d321CB22B7d034969cE6803911899</td>
<td rowspan="16">Convex Finance: Booster : 0xF403C135812408BFbE8713b5A23a04b3D48AAE31</td>
</tr>
<tr>
<td>11</td>
<td>ConvexIronBankJpyStrategy</td>
<td>0x0e0963f34560bc337513319c4a7bf65f4c083907</td>
<td>Iron Bank: iJPY：0x215F34af6557A6598DbdA9aa11cc556F5AE264B1 Curve.fi Factory Plain Pool: ibJPY：0x8818a9bb44Fbf33502bE7c15c500d0C783B73067</td>
</tr>

<tr>
<td>12</td>
<td>ConvexIronBankGbpStrategy</td>
<td>0x562c03b7822c9bcb9d19749a328d468eb8a15f48</td>
<td>Iron Bank: iGBP：0xecaB2C76f1A8359A06fAB5fA0CEea51280A97eCF Curve.fi Factory Plain Pool: ibGBP：0xD6Ac1CB9019137a896343Da59dDE6d097F710538</td>
</tr>
<tr>
<td>13</td>
<td>ConvexIronBankEurStrategy</td>
<td>0x809491dc62e9177733e0ce11b0f73cd873d47ed3</td>
<td>Iron Bank: iEUR ：0x00e5c0774A5F065c285068170b20393925C84BF3 Curve.fi Factory Plain Pool: ibEUR：0x19b080FE1ffA0553469D20Ca36219F17Fcf03859</td>
</tr>

<tr>
<td>14</td>
<td>ConvexIronBankChfStrategy</td>
<td>0x560419b9183db2c9fb8ae32dbc93bef5b34c7826</td>
<td>Iron Bank: iCHF：0x1b3E95E8ECF7A7caB6c4De1b344F94865aBD12d5/Curve.fi Factory Plain Pool: ibCHF：0x9c2C8910F113181783c249d8F6Aa41b51Cde0f0c</td>
</tr>
<tr>
<td>15</td>
<td>ConvexIronBankAudStrategy</td>
<td>0xca41275733bba2831487206631cb46ad40bfda5d</td>
<td>Iron Bank: iUSDT ：0x48759F220ED983dB51fA7A8C0D2AAb8f3ce4166a/Curve.fi Factory Plain Pool: ibAUD：0x3F1B0278A9ee595635B61817630cC19DE792f506</td>
</tr>
<tr>
<td>16</td>
<td>Convex3CrvStrategy</td>
<td>0x4d4700c777be1e11ec3af9465c90280788329964</td>
<td>Curve.fi: DAI/USDC/USDT Pool 0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7</td>
</tr>
<tr>
<td>17</td>
<td>ConvexBusdStrategy</td>
<td>0x264644dfbab5df335a05532a730421491808a7e5</td>
<td>Curve.fi: BUSD Swap：0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27</td>
</tr>
<tr>
<td>18</td>
<td>ConvexLusdStrategy</td>
<td>0x1f20dfb2b2ddbef30ea7c404d31970614dc5d6b5</td>
<td>LUSD3CRV-f：0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA </td>
</tr>
<tr>
<td>19</td>
<td>ConvexBusdV2Strategy</td>
<td>0x12896914a7fe92236d167c0c498b490d3aefd3e2</td>
<td>Curve.fi: BUSD V2：0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a</td>
</tr>
<tr>
<td>20</td>
<td>ConvexYStrategy</td>
<td>0x22ffc3b6b250c8bedee7e67c8e3ca6e2aaac63a4</td>
<td>Curve.fi: y Swap：0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51</td>
</tr>
<tr>
<td>21</td>
<td>ConvexUsdtStrategy</td>
<td>0x23a25fa21584b4b8f1348ac74396bf0ee8a72b6f</td>
<td>Curve.fi: USDT Swap ：0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C</td>
</tr>

<tr>
<td>22</td>
<td>ConvexTusdStrategy</td>
<td>0x968ebccd0e77644242ffb4468abe93774f75f34f</td>
<td>TUSD3CRV-f：0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1</td>
</tr>

<tr>
<td>23</td>
<td>ConvexPaxStrategy</td>
<td>0xf08fda0293cc8706ae1e280a9dc194c137cb63be</td>
<td>pax-usdp3：0xc270b3B858c335B6BA5D5b10e2Da8a09976005ad</td>
</tr>

<tr>
<td>24</td>
<td>ConvexCompoundStrategy</td>
<td>0x02733188d0cbc87b4046b5ad12b9f3c8f3879c14</td>
<td>Curve.fi: Compound Swap ：0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56</td>
</tr>

<tr>
<td>25</td>
<td>ConvexAaveStrategy</td>
<td>0x7f3bd67d7366dbc6b149f606cfa9c8fcdb72d9e2</td>
<td>Curve.fi: aDAI/aUSDC/aUSDT Pool ：0xDeBF20617708857ebe4F679508E7b7863a8A8EeE</td>
</tr>

<tr>
<td>26</td>
<td>Yearn</td>
<td>YearnEarnTusdStrategy</td>
<td>0x5c09ab7a2e09cc0f1d2e7f7ed189a7477c8e9623</td>
<td>yearn: yTUSD Token ：0x73a052500105205d34Daf004eAb301916DA8190f</td>
<td></td>
</tr>
<tr>
<td>27</td>
<td>Guni</td>
<td>GUniUsdcDai100Strategy</td>
<td>0x6488b7756e4338d73b85c61a67ca33921be59c88</td>
<td>Gelato Uniswap DAI/USDC LP (G-UNI)：0x50379f632ca68D36E50cfBC8F78fe16bd1499d1e</td>
<td></td>
</tr>
</table>

Polygon

Polygon is a developer-first hybrid POS+Plasma side-chain on top of Ethereum, enabling Ethereum developers to scale their dApps for large-scale usage. It is a network and framework for creating and linking Ethereum-compatible blockchains.

Consensus on the Polygon network is reached through validators in a Proof of Stake (PoS) mechanism. The cost on Polygon is low, in just a fraction of a cent. Speed Transaction times on Polygon are also near instantaneous. The native token of Polygon is the Matic token, a legacy from the fact that Polygon was born out of the Matic project. As a layer 2 for Ethereum, Polygon supports the ERC20 and ERC721 token standards.

<table>
<tr>
<td>Sequence</td>
<td>Protocol</td>
<td>Contract</td>
<td>Address</td>
<td colspan="2">3rd party Protocol Contract</td>
</tr>
<tr>
<td>1</td>
<td>Vault</td>
<td>Vault</td>
<td>0xFB7f340A7DEfD3bB0072844db6D5EbdFAD765dea</td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Curve</td>
<td>Curve3CrvStrategy</td>
<td>0x1f84a8c8c31674b89a4723521ead5a48579b8bf7</td>
<td>Curve.fi: Aave Pool: 0x445FE580eF8d70FF569aB36e80c647af338db351 Curve.fi: Aave Gauge: 0x19793B454D3AfC7b454F206Ffe95aDE26cA6912c</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td rowspan="2">Aave</td>
<td>AaveUsdtStrategy</td>
<td>0xb80a44d494acb8db24ff7047514a16bb554290e4</td>
<td>Aave: Lending Pool V2: 0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf Aave: Incentives Controller V2: 0x357D51124f59836DeD84c8a1730D72B749d8BC23</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>AaveUsdcStrategy</td>
<td>0x5c9a02f7a45c5407bef7e98d69ca324a29803b15</td>
<td></td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>Balancer</td>
<td>BalancerUsdcUsdtDaiTusdStrategy</td>
<td>0x23c75b1397ad73b3b572ccc9c3eb3ecede9682c4</td>
<td>Balancer: Vault ：0xBA12222222228d8Ba445958a75a0704d566BF2C8</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td rowspan="3">Quickswap</td>
<td>QuickswapDaiUsdtStrategy</td>
<td>0xd55001d2508b58a7bc197c50c64ebbd0ae587300</td>
<td>StakingRewards: 0xc45aB79526Dd16B00505EB39222E6B1Aed0Ef079</td>
<td rowspan="3">QuickSwap: Router: 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff</td>
</tr>
<tr>
<td>7</td>
<td>QuickswapUsdcDaiStrategy</td>
<td>0x73341635f65cb51b450288bfcca653ba4fdaa261</td>
<td>StakingRewards: 0xACb9EB5B52F495F09bA98aC96D8e61257F3daE14</td>
</tr>

<tr>
<td>8</td>
<td>QuickswapUsdcUsdtStrategy</td>
<td>0xa3851408642cbe4babf85514f92f06c6fcef0cdf</td>
<td>StakingRewards: 0xAFB76771C98351Aa7fCA13B130c9972181612b54</td>
</tr>

<tr>
<td>9</td>
<td rowspan="2">Sushi</td>
<td>SushiUsdcUsdtStrategy</td>
<td>0x4717eaa5da97f11bda3a3f021a20fd8cb72eab64</td>
<td>SushiSwap: Router: 0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506 SushiSwap: MiniChef: 0x0769fd68dFb93167989C6f7254cd0D766Fb2841F</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>SushiUsdcDaiStrategy</td>
<td>0xce531a4ecd1143b93dffaa054245a8f27a3e03fe</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>Synapse</td>
<td>Synapse4UStrategy</td>
<td>0x38d77bbfb522844e50dae8ec8ec62942d0de98c0</td>
<td>SwapFlashLoan: 0x85fCD7Dd0a1e1A9FCD5FD886ED522dE8221C3EE5 Synapse: MiniChef: 0x7875Af1a6878bdA1C129a4e2356A3fD040418Be5</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>Dodo</td>
<td>DodoUsdtUsdcStrategy</td>
<td>0x257223fcc6f33e5067260c9c18620d2f6d524b61</td>
<td>DODO：0x813FddecCD0401c4Fa73B092b074802440544E52 DODOMine：0xB14dA65459DB957BCEec86a79086036dEa6fc3AD</td>
<td></td>
</tr>
</table>

BNB

Binance BNB was founded in August 2020 and massively gained in popularity in the first quarter of 2021 because of the high gas fees and slow transaction confirmations on the Ethereum blockchain. BNB operates similarly to the Ethereum ecosystem, because it is EVM-compatible, meaning Ethereum smart contracts are fully compatible, with additional tweaks to make the blockchain faster.

<table>
<tr>
<td>Sequence</td>
<td>Protocol</td>
<td>Contract</td>
<td>Address</td>
<td colspan="2">3rd party Protocol Contract</td>
</tr>
<tr>
<td>1</td>
<td></td>
<td>Vault</td>
<td>0x699F86dd50224544E6c23670Af44682CAe9db3c5</td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td rowspan="5">Pancake</td>
<td>PancakeDaiBusdStrategy</td>
<td>0x3fa2b30bfa5816b115b648d42955d3c3cb7bc368</td>
<td>PancakeSwap: Router v2 ：0x10ED43C718714eb63d5aA57B78B54704E256024E PancakeSwap: Main Staking Contract: 0x73feaa1eE314F8c655E354234017bE2193C9E24E</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>PancakeTusdBusdStrategy</td>
<td>0x3c87c8a62bc56b9663a256999c5aa333ce459857</td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>PancakeUsdcBusdStrategy</td>
<td>0x05898f26ebfb39de28c55a7dc3d2ff062aa8defa</td>
<td></td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>PancakeUsdcUsdtStrategy</td>
<td>0x06695568007119a0f79720cb0ad481c9ce640e9c</td>
<td></td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>PancakeUsdtBusdStrategy</td>
<td>0xeccc75f9e1ba708c25202c744ea61dc93dc9a2f0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>7</td>
<td rowspan="3">Alpaca</td>
<td>AlpacaTusdStrategy</td>
<td>0x7983b99faf9854d82bbd100302defff4f6fd9b51</td>
<td>ibTUSD：0x3282d2a151ca00BfE7ed17Aa16E42880248CD3Cd</td>
<td rowspan="3">Alpaca Finance: Fairlaunch: 0xA625AB01B08ce023B2a342Dbb12a16f2C8489A8F</td>
</tr>
<tr>
<td>8</td>
<td>AlpacaUsdtStrategy</td>
<td>0x568dced4cb4114359854f052fc5b776f6c6d12dc</td>
<td>ibUSDT：0x158Da805682BdC8ee32d52833aD41E74bb951E59</td>
</tr>
<tr>
<td>9</td>
<td>AlpacaBusdStrategy</td>
<td>0x8178f4a3c7acc168cba50c8a70b4de8b63d6d892</td>
<td>ibBUSD：0x7C9e73d4C71dae564d41F78d56439bB4ba87592f</td>
</tr>
<tr>
<td>10</td>
<td rowspan="5">Venus</td>
<td>VenusTusdStrategy</td>
<td>0x175724af9ec5e3e7b71934d31b5db4f8c4146db4</td>
<td>vTUSD：0x08CEB3F4a7ed3500cA0982bcd0FC7816688084c3</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>VenusUsdtStrategy</td>
<td>0x21b31dc834588f81d2ae3fe64f3ce3c5bdbd070d</td>
<td>VUSDT：0xfD5840Cd36d94D7229439859C0112a4185BC0255</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>VenusUsdcStrategy</td>
<td>0x1623cb1cd01e01d0dff7e5091197a8e261fb5596</td>
<td>vUSDC：0xecA88125a5ADbe82614ffC12D0DB554E2e2867C8</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>VenusDaiStrategy</td>
<td>0xc0ce366cedbe7ba63036820c72c1ea7bccd8963f</td>
<td>vDAI：0x334b3eCB4DCa3593BCCC3c7EBD1A1C1d1780FBF1</td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>VenusBusdStrategy</td>
<td>0x65ab000d3474dcd0fa347935dba68f0dda354c88</td>
<td>vBUSD：0x95c78222B3D6e262426483D42CfA53685A67Ab9D</td>
<td></td>
</tr>
<tr>
<td>15</td>
<td>Belt</td>
<td>Belt4BeltStrategy</td>
<td>0xa59d8ff6c63eefc8001c8d5501bde62fca564bc6</td>
<td>beltPair：0xF6e65B33370Ee6A49eB0dbCaA9f43839C1AC04d5 MasterBelt：0xD4BbC80b9B102b77B21A06cb77E954049605E6c1</td>
<td></td>
</tr>
<tr>
<td>16</td>
<td rowspan="2">DODO</td>
<td>DodoBusdUsdcStrategy</td>
<td>0x466cc0484a2077b769420bec7b0620bba5ffebd1</td>
<td>DODO：0x6064DBD0fF10BFeD5a797807042e9f63F18Cfe10</td>
<td rowspan="2">DODOMine：0x01f9BfAC04E6184e90bD7eaFD51999CE430Cc750</td>
</tr>
<tr>
<td>17</td>
<td>DodoBusdUsdtStrategy</td>
<td>0xd1f9f90492ad3fccf0f1772be9f0a6bdaed27e84</td>
<td>DODO：0xBe60d4c4250438344bEC816Ec2deC99925dEb4c7</td>
</tr>
<tr>
<td>18</td>
<td rowspan="4">DForce</td>
<td>DForceLendBusdStrategy</td>
<td>0x5960f21b3e388f4435ad61cb6b74440cb93de232</td>
<td>iBUSD：0x5511b64Ae77452C7130670C79298DEC978204a47</td>
<td></td>
</tr>
<tr>
<td>19</td>
<td>DForceLendDaiStrategy</td>
<td>0x1a235ea7fee8ed513c271d19f46d8a66c66aacbc</td>
<td>iDAI：0xAD5Ec11426970c32dA48f58c92b1039bC50e5492</td>
<td></td>
</tr>
<tr>
<td>20</td>
<td>DForceLendUsdcStrategy</td>
<td>0xdabf728c63e50c8655bd591200cdaed850270f97</td>
<td>iUSDC：0xAF9c10b341f55465E8785F0F81DBB52a9Bfe005d</td>
<td></td>
</tr>
<tr>
<td>21</td>
<td>DForceLendUsdtStrategy</td>
<td>0xf0565751ed9cf38763a34a695060536092b4aa2f</td>
<td>iUSDT：0x0BF8C72d618B5d46b055165e21d661400008fa0F</td>
<td></td>
</tr>
<tr>
<td>22</td>
<td>Synapse</td>
<td>Synapse4UStrategy</td>
<td>0x1d63e9ef24a41582b003c3908b685fa9e9655e2b</td>
<td>SwapFlashLoan：0x28ec0B36F0819ecB5005cAB836F4ED5a2eCa4D13 Synapse: MiniChef ：0x8F5BBB2BB8c2Ee94639E55d5F41de9b4839C1280</td>
<td></td>
</tr>
</table>

## Incorporated protocols and specific yield generating pools

Balancer

Balancer protocol is a non-custodial portfolio manager, liquidity provider, and price sensor with customizable number of assets and weights within a pool. Trade against all pools in the Balancer ecosystem for best price execution where pools are controlled by smart contracts that can be implemented at any arbitrary trading strategy or logic. Trades are split through an SOR which performs an optimization across all pools for best price execution. Frontends are open-source and will be made available through IPFS.

<https://app.balancer.fi/#/>

Aave

Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets. Aave is a decentralized non-custodial money market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion. At Aave, the funds are stored in a non-custodial smart contract on the Ethereum blockchain and regulated and auditable by code. To ensure top notch security, Aave Protocol has had audits by trail of bits, open zeppelin, consensys diligence, certik, peckshield and certora. All audits are publicly available.

<https://aave.com/>

Convex
Convex allows Curve.fi liquidity providers to earn trading fees and claim boosted CRV without locking CRV themselves. Liquidity providers can receive boosted CRV and liquidity mining rewards with minimal effort. Convex also lets users receive trading fees as well as a share of boosted CRV received by liquidity providers.  Convex has no withdrawal fees and minimal performance fees which is used to pay for gas and distributed to CVX stakers. CRV stakers and liquidity providers also receive liquidity mining rewards in the form of CVX. Convex allows liquidity providers to earn trading fees and claim boosted CRV without locking CRV themselves.

<https://www.convexfinance.com/>

UniswapV2
As a venue for pooled, automated liquidity provision on Ethereum, the Uniswap protocol (Uniswap) functions without upkeep, providing an unstoppable platform for ERC20 token conversion.  Uniswap V2 is the second iteration of Uniswap and includes many new features and improvements.

<https://uniswap.org/blog/uniswap-v2>

UniswapV3
As a venue for pooled, automated liquidity provision on Ethereum, the Uniswap protocol (Uniswap) functions without upkeep, providing an unstoppable platform for ERC20 token conversion.  Uniswap V3 is the third iteration of Uniswap and includes many new features and improvements.

<https://uniswap.org/blog/uniswap-v3>

Dodo
DODO is an On-Chain Liquidity Provider for everyone.DODO Aims to be the Best Decentralize Exchange (DEX) Ranking based on trading volumes.

<https://dodoex.io/zh>

Sushi_Kashi

Kashi is a lending and margin trading platform, built on the BentoBox, that allows for anyone to create customized and gas-efficient markets for lending, borrowing, and collateralizing a variety of DeFi tokens, stable coins, and synthetic assets.

<https://docs.sushi.com/products/kashi-lending>

YearnEarn
Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain. The protocol is maintained by various independent developers and is governed by YFI token holders.

<https://yearn.finance/#/home>

YearnV2
Yearn Earn V2 is a suite of products providing lending aggregation, yield generation, and insurance on the Ethereum blockchain.  With DeFi Earn integration, we handle the deposit and withdrawal process with Yearn Earn V2 natively on the DeFi Wallet app, hence you don’t have to worry about dealing with smart contract calls and we simplify the concept of yTokens and display the estimated interest you’re earning over time.

<https://yearn.finance/#/home>

## Incorporated Stablecoins

The first collection of live assets were stable coins pegged to the US dollar. Since BlockBank supports multi-chain asset management, each chain is backed by a basket of selected USD stable coins. Each asset in the vault has a set of maximum and minimum weights.

The assets currently go live include:

### DAI

Dai is created from an overcollateralized loan and repayment process facilitated by MakerDAO's smart contracts in the form of a decentralized application.

<https://makerdao.com/en/>

### USDC

USDC was first announced on 15 May 2018 by Circle and was launched in September of 2018.

<https://www.centre.io/usdc>

### USDT

Tether (USDT) is a cryptocurrency that is hosted on the Ethereum and Bitcoin blockchains.  Its tokens are issued by Tether Limited, which in turn is controlled by the owners of Bitfinex.

<https://tether.to/en/>

### BUSD

Binance USD (BUSD) is a new stablecoin developed in partnership between Binance and Paxos. It is backed 1:1 by U.S. dollars.

<https://www.binance.com/en/busd>

### USDP

Founded in September of 2018, Pax Dollar (USDP) is a fiat-collateralized stablecoin that offers the advantage of transacting with blockchain assets through minimized price risk.

<https://paxos.com/usdp/>

### TUSD

TrueUSD was launched by TrustToken on 5 March 2018 on Bittrex and quickly grew.

<https://www.trusttoken.com/>

### LUSD

LUSD is a fully redeemable USD-pegged stablecoin issued by the Liquity Protocol.

<https://www.liquity.org/>