

# 轮训结果

### `queryOrder` 查询支付结果

在用户完成支付之后，收款方是不清楚用户是否完成支付的。因此需要收款方定时去轮训 DecPay 合约的 `queryOrder` 方法。通过该方法查询某一个订单是否完成了支付，支付了多少钱，使用什么 token 支付的。

### `queryOrderMulti` 批量查询支付结果

如果您的订单量较大，我们建议使用 DecPay 合约的 `queryOrderMulti` 方法一次批量查询多个订单的支付结果。

### 监听 `PaySuccessEvent` 支付成功事件

监听 `PaySuccessEvent` 事件第一时间得知订单支付结果。我们建议您将监听事件和轮训一起使用。这样效率更高，响应速度更快。

