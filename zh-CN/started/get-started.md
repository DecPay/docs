

# 快速开始

### 介绍

DecPay 是一个去中心化支付解决方案协议。DecPay 的实现非常简单，它其实就是一个状态协议。在 DecPay 合约中，它记录了商家用户支付的订单号，支付总额，用于支付的Token（比如：ETH，BNB，USDT，DAI等等）。商家通过查询合约的中的订单支付信息来判断用户是否完成支付。这就是 DecPay 协议，一个极其简单的去中心化的状态协议。


### 创建 Application 

如果您想通过 DecPay 实现收款，那么您在使用之前必须通过 DecPay 的 Application 管理端创建属于您自己的 Application ，这个 Application 在 DecPay 的合约中是独一无二的，这样就能确保您的用户所支付的资金记录到您的账户下。作为 Application 的管理者，您将有权限提取 Application 中的账户余额。

请点击 [DecPay Application管理端](https://app.decpay.finance) 链接， 前去创建一个 Application 用于收款。

### 汇率换算

在使用 DecPay 之前，您还需要准备一个汇率换算的接口服务，该服务可以将您的基础货币金额换算为Token货币金额。举个例子，如果您的用户创建了一个新的订单，这笔订单总金额为 100 人民币，用户在选择支付的时候，选择了使用 ETH 支付，那么，您就需要将 100 人民币换算为 n ETH。比如说：100 人民币换算为 0.01 ETH 。关于汇率换算的实现，我们在这里给出了几个方案 [汇率换算](./汇率换算.md) 。


### 跳转到 DecPay 收银台

经过前面两个步骤之后，您已经创建了 Application 且已经有了汇率换算服务，到这里，就可以引导用户进入 DecPay 的收银台完成支付了。首先，您需要准备这些参数：

| 参数 | 类型 | 说明 | 例子 |
| --- | --- | --- | --- |
| `subject` | `string` | 商品名 | `Iphone 12 pro` |
| `total` | `string` | 支付总额，使用最小单位 |  `10000000000000000` |
| `token` | `string` | 支付Token | 如果是ETH，BNB，HT的话，则留空，如果是ERC20代币则为代币名，如：USDT。不同网络对于 ERC20 代币的支持不一样。 |
| `order_no` | `string` | 订单编号，它在您的业务系统中应该是独一无二的 | `20210515121212` |
| `app` | `string` | 您创建的的 Application | `demo-application` |
| `expired_at` | `int` | 有效截止日期，时间戳。当前用户支付交易时间超过时间戳将无法支付 | `1621167569` |
| `return_url` | `string` | 用户取消支付跳转的URL | `https://yousite.com/cancel_pay` |
| `success_url` | `string` | 用户支付成功跳转的URL | `https://yousite.com/pay_success` |

在准备好这些参数值之后，请将页面重定向到 `https://payment.decpay.finance` 地址，且将上面的参数作为 GET 参数传递到 DecPay 收银台。下面举个例子：

```
https://payment.decpay.finance/?subject=Timberland%20Men%27s%20Classic%20Leather%20Jean%20Belt&total=10000000000000000&token=&order_no=1621161306579&app=decpay-demo&expired_at=1621164907&return_url=https%3A%2F%2Fdemo.decpay.finance&success_url=https%3A%2F%2Fdemo.decpay.finance%2Fsuccess.html
```

当引导用户跳转到 DecPay 收银台完成支付之后，系统将会跳转到原先的业务系统（也就是上述参数中的 `success_url` 和 `return_url` 控制）。

### 获取支付结果

当用户完成之后之后，作为业务方，我们需要轮训调用合约的 `queryOrder` 方法来查询某一个订单是否完成了支付。或者，我们也可以通过监听 DecPay 合约的 `PaySuccessEvent` 时间来得知某一个订单是否完成支付。在查询到响应订单的支付信息之后，我们还需要进一步判断支付的金额和支付的时间是否符合业务系统需求。至此，DecPay 的支付系统已接入完成。

参考链接：

[DecPay 在 ETH , BSC , HECO 网络中的合约地址](/zh-CN/networks/)





