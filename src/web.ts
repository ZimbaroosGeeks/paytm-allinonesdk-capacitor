import { WebPlugin } from '@capacitor/core';
import { AllInOneSDKPlugin, PaymentIntentModel, PaytmResponse } from './definitions';

export class AllInOneSDKWeb extends WebPlugin implements AllInOneSDKPlugin {
  constructor() {
    super({
      name: 'AllInOneSDK',
      platforms: ['web'],
    });
  }

  async startTransaction(options: PaymentIntentModel): Promise<PaytmResponse> {
    console.log(options);
    return {
      message: 'This plugin will not work in browser platform.',
      response: 'This plugin will not work in browser platform.'
    }
  }
}

const AllInOneSDK = new AllInOneSDKWeb();

export { AllInOneSDK };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AllInOneSDK);
