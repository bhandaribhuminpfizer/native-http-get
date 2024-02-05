import { WebPlugin } from '@capacitor/core';

import type { nativeHttpGetPlugin } from './definitions';

export class nativeHttpGetWeb extends WebPlugin implements nativeHttpGetPlugin {
  async get(options: { url: string }): Promise<{ url: string }> {
    console.log('ECHO', options);
    return options;
  }
}
