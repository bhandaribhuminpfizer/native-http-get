import { registerPlugin } from '@capacitor/core';
const nativeHttpGet = registerPlugin('nativeHttpGet', {
    web: () => import('./web').then(m => new m.nativeHttpGetWeb()),
});
export * from './definitions';
export { nativeHttpGet };
//# sourceMappingURL=index.js.map