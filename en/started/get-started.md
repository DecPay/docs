

# Quick start

### Introduction

DecPay is a decentralized payment solution protocol.The implementation of DecPay is very simple, it is actually a state protocol. In the DecPay contract, it records the order number of the merchant user, the total amount of payment, the Token used for payment (e.g. ETH, BNB, USDT, DAI, etc.). The merchant determines whether the user has completed the payment by checking the order payment information in the contract. This is the DecPay protocol, an extremely simple decentralized payment record status protocol.


### Creating an Application 

If you want to receive payments through DecPay, you must create your own Application through DecPay's Application Console, which is unique in the DecPay contract, before you can use it, so that the funds paid by your users are This will ensure that the funds paid by your users are recorded under your account. As the creator of the Application, you will have the right to withdraw the balance of the Application.

Please click on the link [DecPay Application Manager](https://app.decpay.finance) to create an Application for receiving payments.

### Exchange rate conversion

Before using DecPay, you also need to prepare an interface service for exchange rate conversion, which can convert your base currency amount to Token currency amount. For example, if your user creates a new order with a total amount of $100 and the user chooses to pay with ETH, then you need to convert $100 to n ETH. e.g. $100 to 0.01 ETH. For the implementation of the exchange rate conversion, we have given several options here [exchange rate conversion](./currency-converter.md).


### Jump to DecPay cashier

After the first two steps, you have created the Application and you have the exchange rate conversion service, so here you can guide the user to the DecPay cashier to complete the payment. First, you need to prepare these parameters.

| Parameters | Type | Description | Example |
| --- | --- | --- | --- |
| `subject` | `string` | product name | `Iphone 12 pro` |
| `total` | `string` | The total amount of the payment, using the smallest unit. For example, the smallest unit of ETH is gwei | `100000000000000000000` |
| `token` | `string` | Payment Token | For ETH, BNB, and HT, please set `token` to an empty string, or to an alias of the Token in the DecPay contract if it is a Token on the chain, see: [Networks](../networks/) | order_no
| `order_no` | `string` | The order number, which should be unique in your business system | `20210515121212` |
| `app` | `string` | The Application you created | `demo-application` |
| `expired_at` | `int` | The expiration date, timestamp. The current user will not be able to pay for transactions older than the timestamp | `1621167569` |
| `return_url` | `string` | URL of the user's canceled payment jump | `https://yousite.com/cancel_pay` |
| `success_url` | `string` | URL of the user's successful payment jump | `https://yousite.com/pay_success` |

After preparing these parameters, please redirect to DecPay's cashier url according to the network selected by the user and splice these parameters into the cashier url. For example, the cashier url of DecPay's BSC chain is: `https://bsc-payment.decpay.finance` [more](../networks/), then after stitching the above parameters:

```
https://bsc-payment.decpay.finance/?subject=Timberland%20Men%27s%20Classic%20Leather%20Jean%20Belt&total=10000000000000000&token=& order_no=1621161306579&app=decpay&expired_at=1621164907&return_url=https%3A%2F%2Fdemo.decpay.finance&success_url=https%3A%2F%2F 2Fdemo.decpay.finance%2Fsuccess.html
```

After directing the user to the DecPay cashier url to complete the payment, the system will jump to the original business system (which is controlled by `success_url` and `return_url` in the above parameters).

### Get the payment result

After the user finishes, as a business, we need to call the `queryOrder` method of the contract in turn to check if an order has been paid. Alternatively, we can also find out if an order has completed payment by listening to the `PaySuccessEvent` time of the DecPay contract [API Document](../api/DecPay). After querying the payment information of the response order, we need to further determine whether the amount and time of payment meet the business system requirements. At this point, the payment system of DecPay is finished.

Reference link:

[DecPay's contract address in ETH , BSC , HECO network](../networks/)