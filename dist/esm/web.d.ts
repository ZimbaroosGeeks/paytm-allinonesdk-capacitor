import { WebPlugin } from '@capacitor/core';
import type { AllInOneSDKPlugin, PaymentIntentModel, PaytmResponse } from './definitions';
export declare class AllInOneSDKWeb extends WebPlugin implements AllInOneSDKPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    startTransaction(options: PaymentIntentModel): Promise<PaytmResponse>;
}
