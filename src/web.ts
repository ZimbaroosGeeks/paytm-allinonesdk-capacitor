import { WebPlugin } from '@capacitor/core';

import type{
  AllInOneSDKPlugin, PaymentIntentModel, PaytmResponse
} from './definitions';



export class AllInOneSDKWeb extends WebPlugin implements AllInOneSDKPlugin {
  // constructor() {
  //   super({
  //     name: 'AllInOneSDK',
  //     platforms: ['web'],
  //   });
  // }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async startTransaction(options : PaymentIntentModel): Promise<PaytmResponse> {
    return {
      message: 'plugin works!',
      response: options.amount
    }
  }
}

// const AllInOneSDK = new AllInOneSDKWeb();

// export { AllInOneSDK };

// import { registerWebPlugin } from '@capacitor/core';
// registerWebPlugin(AllInOneSDK);

// declare const AllInOneSDK: AllInOneSDKWeb;
// export {AllInOneSDK}