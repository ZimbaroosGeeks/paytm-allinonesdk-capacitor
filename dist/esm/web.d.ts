import { WebPlugin } from '@capacitor/core';
import { AllInOneSDKPlugin, PaymentIntentModel, PaytmResponse } from './definitions';
export declare class AllInOneSDKWeb extends WebPlugin implements AllInOneSDKPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    startTransaction(options: PaymentIntentModel): Promise<PaytmResponse>;
}
declare const AllInOneSDK: AllInOneSDKWeb;
export { AllInOneSDK };
