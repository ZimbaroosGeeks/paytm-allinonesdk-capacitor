import { WebPlugin } from '@capacitor/core';
import { AllInOneSDKPluginPlugin, PaymentIntentModel, PaytmResponse } from './definitions';

export class AllInOneSDKPluginWeb extends WebPlugin implements AllInOneSDKPluginPlugin {
  constructor() {
    super({
      name: 'AllInOneSDKPlugin',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async startTransaction(options : PaymentIntentModel): Promise<PaytmResponse> {
    console.log(options);
    let result: PaytmResponse = {
      message: 'paytm web plugin works!',
      response: 'paytm web plugin response'
    };
    return result;
  }
}

const AllInOneSDKPlugin = new AllInOneSDKPluginWeb();

export { AllInOneSDKPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AllInOneSDKPlugin);
