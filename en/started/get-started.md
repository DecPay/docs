

# Quick start

### Introduction

DecPay is a decentralized payment solution protocol.The implementation of DecPay is very simple, it is actually a state protocol. In the DecPay contract, it records the order number of the merchant user, the total amount of payment, the Token used for payment (e.g. ETH, BNB, USDT, DAI, etc.). The merchant determines whether the user has completed the payment by checking the order payment information in the contract. This is the DecPay protocol, an extremely simple decentralized stateful protocol.


### Creating an Application 

If you want to receive payments through DecPay, you must create your own Application through DecPay's Application Manager before you can use it, which is unique in the DecPay contract, so that you can ensure that the funds paid by your users are This will ensure that the funds paid by your users are recorded under your account. As the administrator of the Application, you will have the right to withdraw the account balance from the Application.

Please click on the link [DecPay Application Manager](https://app.decpay.finance) to create an Application for receiving payments.

### Exchange rate conversion

Before using DecPay, you also need to prepare an interface service for exchange rate conversion, which can convert your base currency amount to Token currency amount. For example, if your user creates a new order with a total amount of $100 and the user chooses to pay with ETH, then you need to convert $100 to n ETH. e.g. $100 to 0.01 ETH. For the implementation of the exchange rate conversion, we have given several options here [exchange rate conversion](./currency-converter.md).


### Jump to DecPay cashier

After the first two steps, you have created the Application and you have the exchange rate conversion service, so here you can guide the user to the DecPay cashier to complete the payment. First, you need to prepare these parameters.

| Parameters | Type | Description | Example |
| --- | --- | --- | --- |
| `subject` | `string` | product name | `Iphone 12 pro` |
| `total` | `string` | Total amount paid, using minimum units | `100000000000000000000` |
| `token` | `string` | Payment Token | If it is ETH, BNB, HT, then leave it blank, if it is ERC20 token then it is the token name, e.g. USDT. | order_no
| `order_no` | `string` | The order number, which should be unique in your business system | `20210515121212` |
| `app` | `string` | The Application you created | `demo-application` |
| `expired_at` | `int` | The expiration date, timestamp. The current user will not be able to pay for transactions older than the timestamp | `1621167569` |
| `return_url` | `string` | URL of the user's canceled payment jump | `https://yousite.com/cancel_pay` |
| `success_url` | `string` | URL of the user's successful payment jump | `https://yousite.com/pay_success` |

After preparing these parameter values, please redirect the page to the `https://payment.decpay.finance` address and pass the above parameters to DecPay cashier as GET parameters. Here is an example.

```
https://payment.decpay.finance/?subject=Timberland%20Men%27s%20Classic%20Leather%20Jean%20Belt&total=10000000000000000&token=& order_no=1621161306579&app=decpay-demo&expired_at=1621164907&return_url=https%3A%2F%2Fdemo.decpay.finance&success_url=https%3A%2F%2F 2Fdemo.decpay.finance%2Fsuccess.html
```

After directing the user to the DecPay cashier to complete the payment, the system will jump to the original business system (which is controlled by `success_url` and `return_url` in the above parameters).

### Get the payment result

After the user finishes, as a business, we need to call the `queryOrder` method of the contract in turn to check if an order has been paid. Alternatively, we can also find out if an order has completed payment by listening to the `PaySuccessEvent` time of the DecPay contract. After querying the payment information of the response order, we need to further determine whether the amount and time of payment meet the business system requirements. At this point, the payment system of DecPay is finished.

Reference link:

[DecPay's contract address in ETH , BSC , HECO network](../networks/)