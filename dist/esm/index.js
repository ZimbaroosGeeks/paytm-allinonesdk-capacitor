// export * from './definitions';
// export * from './web';
import { registerPlugin } from '@capacitor/core';
const AllInOneSDK = registerPlugin('AllInOneSDK', {
    web: () => import('./web').then(m => new m.AllInOneSDKWeb()),
});
export { AllInOneSDK };
//# sourceMappingURL=index.js.map