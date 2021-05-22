

### Polling results

### `queryOrder` Query Payment Results

After a user completes a payment, the recipient does not know whether the user has completed the payment or not. Therefore, the recipient needs to regularly train the `queryOrder` method of DecPay contract. This method queries whether an order has been paid, how much was paid, and what token was used to pay for it.

### `queryOrderMulti` Batch querying payment results

If you have a large number of orders, we recommend using the `queryOrderMulti` method of the DecPay contract to query the payment results of multiple orders in a single batch.

### Listening to `PaySuccessEvent` payment success event

Listen to the `PaySuccessEvent` event to be informed of the order payment result in the first place. We recommend that you use the listen event together with the training round. This is more efficient and responsive.

### Reference links

[DecPay contract address](../networks/README.md)