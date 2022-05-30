export interface AllInOneSDKPlugin {
    startTransaction(options: PaymentIntentModel): Promise<PaytmResponse>;
}
/**
* The response that will be recieved when any transaction is completed
*/
export interface PaytmResponse {
    message: string;
    response: string;
}
/**
* For below parameters see [documentation](https://developer.paytm.com/docs/all-in-one-sdk/)
*/
export interface PaymentIntentModel {
    mid: string;
    orderId: string;
    txnToken: string;
    amount: string;
    isStaging: boolean;
    callbackUrl: string;
}
