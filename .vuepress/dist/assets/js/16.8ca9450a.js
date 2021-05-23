(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{372:function(e,t,a){"use strict";a.r(t);var r=a(44),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick start")]),e._v(" "),a("h3",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("DecPay is a decentralized payment solution protocol.The implementation of DecPay is very simple, it is actually a state protocol. In the DecPay contract, it records the order number of the merchant user, the total amount of payment, the Token used for payment (e.g. ETH, BNB, USDT, DAI, etc.). The merchant determines whether the user has completed the payment by checking the order payment information in the contract. This is the DecPay protocol, an extremely simple decentralized stateful protocol.")]),e._v(" "),a("h3",{attrs:{id:"creating-an-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-application"}},[e._v("#")]),e._v(" Creating an Application")]),e._v(" "),a("p",[e._v("If you want to receive payments through DecPay, you must create your own Application through DecPay's Application Manager before you can use it, which is unique in the DecPay contract, so that you can ensure that the funds paid by your users are This will ensure that the funds paid by your users are recorded under your account. As the administrator of the Application, you will have the right to withdraw the account balance from the Application.")]),e._v(" "),a("p",[e._v("Please click on the link "),a("a",{attrs:{href:"https://app.decpay.finance",target:"_blank",rel:"noopener noreferrer"}},[e._v("DecPay Application Manager"),a("OutboundLink")],1),e._v(" to create an Application for receiving payments.")]),e._v(" "),a("h3",{attrs:{id:"exchange-rate-conversion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exchange-rate-conversion"}},[e._v("#")]),e._v(" Exchange rate conversion")]),e._v(" "),a("p",[e._v("Before using DecPay, you also need to prepare an interface service for exchange rate conversion, which can convert your base currency amount to Token currency amount. For example, if your user creates a new order with a total amount of $100 and the user chooses to pay with ETH, then you need to convert $100 to n ETH. e.g. $100 to 0.01 ETH. For the implementation of the exchange rate conversion, we have given several options here [exchange rate conversion](. /exchangerate.md).")]),e._v(" "),a("h3",{attrs:{id:"jump-to-decpay-cashier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jump-to-decpay-cashier"}},[e._v("#")]),e._v(" Jump to DecPay cashier")]),e._v(" "),a("p",[e._v("After the first two steps, you have created the Application and you have the exchange rate conversion service, so here you can guide the user to the DecPay cashier to complete the payment. First, you need to prepare these parameters.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameters")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Example")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("subject")])]),e._v(" "),a("td",[a("code",[e._v("string")])]),e._v(" "),a("td",[e._v("product name")]),e._v(" "),a("td",[a("code",[e._v("Iphone 12 pro")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("total")])]),e._v(" "),a("td",[a("code",[e._v("string")])]),e._v(" "),a("td",[e._v("Total amount paid, using minimum units")]),e._v(" "),a("td",[a("code",[e._v("100000000000000000000")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("token")])]),e._v(" "),a("td",[a("code",[e._v("string")])]),e._v(" "),a("td",[e._v("Payment Token")]),e._v(" "),a("td",[e._v("If it is ETH, BNB, HT, then leave it blank, if it is ERC20 token then it is the token name, e.g. USDT.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("order_no")])]),e._v(" "),a("td",[a("code",[e._v("string")])]),e._v(" "),a("td",[e._v("The order number, which should be unique in your business system")]),e._v(" "),a("td",[a("code",[e._v("20210515121212")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("app")])]),e._v(" "),a("td",[a("code",[e._v("string")])]),e._v(" "),a("td",[e._v("The Application you created")]),e._v(" "),a("td",[a("code",[e._v("demo-application")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("expired_at")])]),e._v(" "),a("td",[a("code",[e._v("int")])]),e._v(" "),a("td",[e._v("The expiration date, timestamp. The current user will not be able to pay for transactions older than the timestamp")]),e._v(" "),a("td",[a("code",[e._v("1621167569")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("return_url")])]),e._v(" "),a("td",[a("code",[e._v("string")])]),e._v(" "),a("td",[e._v("URL of the user's canceled payment jump")]),e._v(" "),a("td",[a("code",[e._v("https://yousite.com/cancel_pay")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("success_url")])]),e._v(" "),a("td",[a("code",[e._v("string")])]),e._v(" "),a("td",[e._v("URL of the user's successful payment jump")]),e._v(" "),a("td",[a("code",[e._v("https://yousite.com/pay_success")])])])])]),e._v(" "),a("p",[e._v("After preparing these parameter values, please redirect the page to the "),a("code",[e._v("https://payment.decpay.finance")]),e._v(" address and pass the above parameters to DecPay cashier as GET parameters. Here is an example.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://payment.decpay.finance/?subject=Timberland%20Men%27s%20Classic%20Leather%20Jean%20Belt&total=10000000000000000&token=& order_no=1621161306579&app=decpay-demo&expired_at=1621164907&return_url=https%3A%2F%2Fdemo.decpay.finance&success_url=https%3A%2F%2F 2Fdemo.decpay.finance%2Fsuccess.html\n")])])]),a("p",[e._v("After directing the user to the DecPay cashier to complete the payment, the system will jump to the original business system (which is controlled by "),a("code",[e._v("success_url")]),e._v(" and "),a("code",[e._v("return_url")]),e._v(" in the above parameters).")]),e._v(" "),a("h3",{attrs:{id:"get-the-payment-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-payment-result"}},[e._v("#")]),e._v(" Get the payment result")]),e._v(" "),a("p",[e._v("After the user finishes, as a business, we need to call the "),a("code",[e._v("queryOrder")]),e._v(" method of the contract in turn to check if an order has been paid. Alternatively, we can also find out if an order has completed payment by listening to the "),a("code",[e._v("PaySuccessEvent")]),e._v(" time of the DecPay contract. After querying the payment information of the response order, we need to further determine whether the amount and time of payment meet the business system requirements. At this point, the payment system of DecPay is finished.")]),e._v(" "),a("p",[e._v("Reference link:")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/networks/"}},[e._v("DecPay's contract address in ETH , BSC , HECO network")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);