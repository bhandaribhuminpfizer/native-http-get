import { registerPlugin } from '@capacitor/core';

import type { nativeHttpGetPlugin } from './definitions';

const nativeHttpGet = registerPlugin<nativeHttpGetPlugin>('nativeHttpGet', {
  web: () => import('./web').then(m => new m.nativeHttpGetWeb()),
});

export * from './definitions';
export { nativeHttpGet };
