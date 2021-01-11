import { WebPlugin } from '@capacitor/core';
import { AllInOneSDKPlugin } from './definitions';
export declare class AllInOneSDKWeb extends WebPlugin implements AllInOneSDKPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const AllInOneSDK: AllInOneSDKWeb;
export { AllInOneSDK };
