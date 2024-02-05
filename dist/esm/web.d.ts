import { WebPlugin } from '@capacitor/core';
import type { nativeHttpGetPlugin } from './definitions';
export declare class nativeHttpGetWeb extends WebPlugin implements nativeHttpGetPlugin {
    get(options: {
        url: string;
    }): Promise<{
        url: string;
    }>;
}
