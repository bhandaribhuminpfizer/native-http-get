import { WebPlugin } from '@capacitor/core';
export class nativeHttpGetWeb extends WebPlugin {
    async get(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map