import { WebPlugin } from '@capacitor/core';

import type { nativeHttpGetPlugin } from './definitions';

export class nativeHttpGetWeb extends WebPlugin implements nativeHttpGetPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
