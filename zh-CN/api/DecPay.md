---
sidebar: auto
---

# DecPay API

## Models

### AppOrderModel

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `app` | `string` | Application |
| `orderNo` | `string` | 订单编号 |
| `token` | `string` | token |
| `total` | `uint256` | 应支付金额 |
| `payTotal` | `uint256` | 实际支付金额 |
| `paidTimestamp` | `uin256` | 支付时间戳 |
| `paidAddress` | `address` | 支付地址 |

## Methods

### getAppCount

- **参数**：
  - 空

- **返回**：
  - `uint256`

- **说明**：返回 DecPay 合约中 Application 总数量

### getOrderCount

- **参数**：
  - 空

- **返回**：
  - `uint256`

- **说明**：返回 DecPay 合约中订单总数量

### queryApp

- **参数**：
  - `string _app` Application

- **返回**：
  - `address` Application管理人地址

- **说明**：查询 Application 的管理人员 address

### queryAppOrderCount

- **参数**：
  - `string _app` Application

- **返回**：
  - `uint256` Application的订单总数

- **说明**：查询 Application 的订单总数

### queryAppOrderCountMulti

- **参数**：
  - `string[] _app` Application

- **返回**：
  - `uint256[]` 待查询Application的订单总数数组

- **说明**：批量查询 Application 的订单总数

### getAppOrderNoPaginate

- **参数**：
  - `string _app` Application
  - `uint256 _start` 开始索引
  - `uint256 size` 每页条数

- **返回**：
  - `AppOrderModel[]` 订单列表

- **说明**：分页读取 Application 订单

### getAppStatus

- **参数**：
  - `string _app` Application

- **返回**：
  - `bool` Application 状态，`true` 为停止服务，`false` 为服务正常

- **说明**：读取 Application 状态

### queryAppBalance

- **参数**：
  - `string _app` Application

- **返回**：
  - `uint256` Application 的账号余额（ETH,BNB,HT）

- **说明**：读取 Application 的账户余额（非ERC20代币）

### queryAppTokenBalance

- **参数**：
  - `string _app` Application
  - `string _token` token名

- **返回**：
  - `uint256` Application 的 token 余额

- **说明**：读取 Application 的 token 余额

### queryOrder

- **参数**：
  - `string _app` Application
  - `string _orderNo` 订单号

- **返回**：
  - `AppOrderModel` Application 订单

- **说明**：查询 Application 订单

### queryToken

- **参数**：
  - `string _app` Application
  - `string _token` token

- **返回**：
  - `address` token 地址

- **说明**：查询 token 地址


## Events

### PaySuccessEvent

> 订单支付成功触发

```
PaySuccessEvent(
    string _app,
    string _orderNo,
    string token,
    uint256 _payTotal,
    uint256 _paidTimestamp,
    address _paidAddress
);
```

| 参数 | 解释 |
| --- | --- |
| `string _app` | Application |
| `string _orderNo` | 订单编号 |
| `string token` | Token名，如果支付的是ETH,BNB,HT的话则为空字符串 |
| `uint256 _payTotal` | 支付总额 |
| `uint256 _paidTimestamp` | 支付成功时间戳 |
| `uint256 _paidAddress` | 支付人 |


### ApplicationCreatedEvent

> Application 创建成功之后将会触发

```
ApplicationCreatedEvent(string _app, address _owner);
```

| 参数 | 解释 |
| --- | --- |
| `string _app` | Application |
| `address _owner` | Application 创建人 |


### PaySuccessEvent

> 提现成功将会触发

```
WithdrawSuccessEvent(string _app, string _token, uint256 _total);
```

| 参数 | 解释 |
| --- | --- |
| `string _app` | Application |
| `string _token` | 提现的Token，如果是ETH,BNB,HT的话则为空 | 
| `uint256 _total` | 提现金额，最小单位 |