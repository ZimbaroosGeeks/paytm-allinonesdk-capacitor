import { WebPlugin } from '@capacitor/core';
import { AllInOneSDKPlugin } from './definitions';

export class AllInOneSDKWeb extends WebPlugin implements AllInOneSDKPlugin {
  constructor() {
    super({
      name: 'AllInOneSDK',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const AllInOneSDK = new AllInOneSDKWeb();

export { AllInOneSDK };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AllInOneSDK);
