declare module '@capacitor/core' {
  export interface PluginRegistry {
    AllInOneSDK: AllInOneSDKPlugin;
  }
}

export interface AllInOneSDKPlugin {
  startTransaction(options : PaymentIntentModel): Promise<PaytmResponse>
}

/**
* The response that will be recieved when any transaction is completed
*/
export interface PaytmResponse{
  message : string;
  response : string; // A stringified response of a hashmap returned from All-in-One SDK
}

/**
* For below parameters see [documentation](https://developer.paytm.com/docs/all-in-one-sdk/)
*/
export interface PaymentIntentModel{
  mid : string; // Merchant ID
  orderId : string; // Order ID
  txnToken : string; // Transaction Token
  amount : string; // Amount
  isStaging: boolean; // Environment
  callbackUrl: string; // Callback URL
}
