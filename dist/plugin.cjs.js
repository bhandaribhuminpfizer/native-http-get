'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const nativeHttpGet = core.registerPlugin('nativeHttpGet', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.nativeHttpGetWeb()),
});

class nativeHttpGetWeb extends core.WebPlugin {
    async get(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    nativeHttpGetWeb: nativeHttpGetWeb
});

exports.nativeHttpGet = nativeHttpGet;
//# sourceMappingURL=plugin.cjs.js.map
