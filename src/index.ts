// export * from './definitions';
// export * from './web';
import { registerPlugin } from '@capacitor/core';

import type { AllInOneSDKPlugin } from './definitions';

const AllInOneSDK = registerPlugin<AllInOneSDKPlugin>('AllInOneSDK', {
  web: () => import('./web').then(m => new m.AllInOneSDKWeb()),
});

export * from './definitions';
export { AllInOneSDK };
