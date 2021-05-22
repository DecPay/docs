---
sidebar: auto
---

# DecPay API

## Models

### AppOrderModel

| Properties | Type | Description |
| --- | --- | --- |
| `app` | `string` | Application |
| `orderNo` | `string` | order number |
| `token` | `string` | token |
| `total` | `uint256` | amount to be paid |
| `payTotal` | `uint256` | actual amount paid |
| `paidTimestamp` | `uin256` | payment timestamp |
| `paidAddress` | `address` | payment address |

## Methods

### getAppCount

- **Parameters**.
  - Empty

- **returns**.
  - `uint256`

- **Description**: Returns the total number of Applications in the DecPay contract

### getOrderCount

- **Parameters**.
  - Empty

- **returns**.
  - `uint256`

- **Description**: Returns the total number of orders in the DecPay contract

### queryApp

- **Parameters**.
  - `string _app` Application

- **returns**.
  - `address` Application administrator address

- **Description**: query Application's administrator address

### queryAppOrderCount

- **Parameters**.
  - `string _app` Application

- **returns**.
  - `uint256` The total number of orders for the Application

- **Description**: The total number of orders for the query Application

### queryAppOrderCountMulti

- **Parameters**.
  - `string[] _app` Application

- **returns**.
  - `uint256[]` array of the total number of orders for the Application to be queried

- **Description**: Bulk query of the total number of orders for Application

### getAppOrderNoPaginate

- **Parameters**.
  - `string _app` Application
  - `uint256 _start` start index
  - `uint256 size` Number of items per page

- **returns**.
  - `AppOrderModel[]` list of orders

- **Explanation**: Read Application orders in pages

### getAppStatus

- **Parameters**.
  - `string _app` Application

- **returns**.
  - `bool` Application status, `true` for out of service, `false` for normal service

- **Description**: reads the Application status

### queryAppBalance

- **Parameters**.
  - `string _app` Application

- **returns**.
  - `uint256` Application's account balance (ETH,BNB,HT)

- **Description**: Reads the account balance of the Application (non-ERC20 tokens)

### queryAppTokenBalance

- **Parameters**.
  - `string _app` Application
  - `string _token` token name

- **returns**.
  - `uint256` token balance of the Application

- **Description**: Read the token balance of the Application

### queryOrder

- **Parameters**.
  - `string _app` Application
  - `string _orderNo` Order number

- **returns**.
  - `AppOrderModel` Application order

- **Description**: Query Application order

### queryToken

- **Parameters**.
  - `string _app` Application
  - `string _token` token

- **returns**.
  - `address` token address

- **Description**: query token address


## Events

### PaySuccessEvent

> Order payment success trigger

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

| Parameters | Explanation |
| --- | --- |
| `string _app` | Application |
| `string _orderNo` | Order number |
| `string token` | Token name, or empty string if the payment is ETH,BNB,HT |
| `uint256 _payTotal` | the total amount of payment
| `uint256 _paidTimestamp` | the timestamp of the payment success
| `uint256 _paidAddress` | payer |


### ApplicationCreatedEvent

> ApplicationCreatedEvent will be triggered when the application is successfully created.

```
ApplicationCreatedEvent(string _app, address _owner);
```

| Parameters | Explanation |
| --- | --- |
| `string _app` | Application |
| `address _owner` | Application creator |


### PaySuccessEvent

> A successful withdrawal will trigger the

```
WithdrawSuccessEvent(string _app, string _token, uint256 _total);
```

| Parameters | Explanation |
| --- | --- |
| `string _app` | Application |
| `string _token` | the token to withdraw, or null if it is ETH,BNB,HT | 
| `uint256 _total` | The withdrawal amount, minimum unit |