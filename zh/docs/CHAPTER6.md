# 治理Governance

## 策略升级Strategy upgrade

Currently, governance functions are approved via a multisig smart contract controlled by the BlockBank team. Users need to trust the BlockBank team not to abuse administrative functions. This trust requirement will exist until governance rights are transferred to a DAO which is planned for a later iteration.  See the future development section for further details.

目前，治理职能通过区块银行团队控制的multisig智能合同获得批准。用户需要信任区块银行团队，不要滥用管理功能。这种信任需求将一直存在，直到治理权转移到计划在以后迭代中使用的DAO。有关更多详细信息，请参阅“未来发展”一节。

## 收益耕种Yield Farming Algorithm Maintenance

Currently, the Yield Farming Algorithm is controlled by the BlockBank team. Users need to trust the BlockBank team not to abuse administrative functions. This trust requirement will exist until governance rights are transferred to a DAO which is planned for a later iteration.  See the future development section for further details.

目前，产量耕种算法由区块银行团队控制。用户需要信任区块银行团队，不要滥用管理功能。这种信任需求将一直存在，直到治理权转移到计划在以后迭代中使用的DAO。有关更多详细信息，请参阅“未来发展”一节。

## BOC治理代币的其他相关代币组学 Other relevant tokenomics of the BOC governance token

|                                                              | 设置参数                                          | ETH              | BSC              | POLYGON          |
| ------------------------------------------------------------ | ------------------------------------------------- | ---------------- | ---------------- | ---------------- |
| Harvest参数配置 （卖矿+估值上报）                            | 定时任务触发周期                                  | 每天上午6:00     | 每天上午6:00     | 每天上午6:00     |
| 触发策略Harvest最大时间间隔 （若当前Harvest与上次Harvest间隔大于此值，必须做Harvest） | 2.5天                                             | 2.5天            | 2.5天            |                  |
| 触发策略Harvest的收益成本比例系数X （Harvest收益>=成本*X，则可做Harvest） | 5                                                 | 5                | 5                |                  |
| DoHardwork参数配置 （针对增量资金 投资）                     | 定时任务触发周期                                  | 周三周六上午7:00 | 周三周六上午7:00 | 周三周六上午7:00 |
| 成本收益计算周期X （投资X天的收益>=成本，则可做DoHardwork）  | 365天                                             | 365天            | 365天            |                  |
| Allocation参数配置 （针对增量+存留资金 资金分配）            | 预调仓报告触发时机                                | 每周天上午6:50   | 每周天上午6:50   | 每周天上午6:50   |
| 定时任务触发周期                                             | 每周一上午7:00                                    | 每周一上午7:00   | 每周一上午7:00   |                  |
| 成本收益计算周期X （调仓X天的收益>=成本，则可做Allocation）  | 30天                                              | 30天             | 30天             |                  |
| 资金调配 Common参数配置                                      | 资金调配计算兑换滑点设置                          | 0.25%            | 0.25%            | 0.25%            |
| Gas 配置 （包括策略存取款Gas、兑换Gas、Harvest成本）         | 均配置为0 (等资金量超过500W美金时，配置为实际GAS) | 实际GAS          | 实际GAS          |                  |

