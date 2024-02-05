var capacitornativeHttpGet = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
