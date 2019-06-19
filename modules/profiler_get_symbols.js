//
// THIS FILE IS AUTOGENERATED by wasm-bindgen.
//
// Generated from:
// https://github.com/mstange/profiler-get-symbols/commit/0a0aadc68d6196823a5f102feacb2f04424cd681
// by following the instructions in that repository's Readme.md
//

(function() {
    var wasm;
    const __exports = {};


    let cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
            cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
        }
        return cachegetUint32Memory;
    }

    function getArrayU32FromWasm(ptr, len) {
        return getUint32Memory().subarray(ptr / 4, ptr / 4 + len);
    }

    let cachedGlobalArgumentPtr = null;
    function globalArgumentPtr() {
        if (cachedGlobalArgumentPtr === null) {
            cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
        }
        return cachedGlobalArgumentPtr;
    }

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory;
    }

    function getArrayU8FromWasm(ptr, len) {
        return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
    }

    function passArray8ToWasm(arg) {
        const ptr = wasm.__wbindgen_malloc(arg.length * 1);
        getUint8Memory().set(arg, ptr / 1);
        return [ptr, arg.length];
    }

    let cachedTextEncoder = new TextEncoder('utf-8');

    function passStringToWasm(arg) {

        const buf = cachedTextEncoder.encode(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        return [ptr, buf.length];
    }
    /**
    * @param {Uint8Array} arg0
    * @param {Uint8Array} arg1
    * @param {string} arg2
    * @param {CompactSymbolTable} arg3
    * @returns {boolean}
    */
    __exports.get_compact_symbol_table = function(arg0, arg1, arg2, arg3) {
        const [ptr0, len0] = passArray8ToWasm(arg0);
        const [ptr1, len1] = passArray8ToWasm(arg1);
        const [ptr2, len2] = passStringToWasm(arg2);
        try {
            return (wasm.get_compact_symbol_table(ptr0, len0, ptr1, len1, ptr2, len2, arg3.ptr)) !== 0;

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);
            wasm.__wbindgen_free(ptr1, len1 * 1);
            wasm.__wbindgen_free(ptr2, len2 * 1);

        }

    };

    function freeCompactSymbolTable(ptr) {

        wasm.__wbg_compactsymboltable_free(ptr);
    }
    /**
    */
    class CompactSymbolTable {

        free() {
            const ptr = this.ptr;
            this.ptr = 0;
            freeCompactSymbolTable(ptr);
        }

        /**
        * @returns {}
        */
        constructor() {
            this.ptr = wasm.compactsymboltable_new();
        }
        /**
        * @returns {Uint32Array}
        */
        take_addr() {
            const retptr = globalArgumentPtr();
            wasm.compactsymboltable_take_addr(retptr, this.ptr);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getArrayU32FromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 4);
            return realRet;

        }
        /**
        * @returns {Uint32Array}
        */
        take_index() {
            const retptr = globalArgumentPtr();
            wasm.compactsymboltable_take_index(retptr, this.ptr);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getArrayU32FromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 4);
            return realRet;

        }
        /**
        * @returns {Uint8Array}
        */
        take_buffer() {
            const retptr = globalArgumentPtr();
            wasm.compactsymboltable_take_buffer(retptr, this.ptr);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;

        }
    }
    __exports.CompactSymbolTable = CompactSymbolTable;

    let cachedTextDecoder = new TextDecoder('utf-8');

    function getStringFromWasm(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }

    __exports.__wbindgen_throw = function(ptr, len) {
        throw new Error(getStringFromWasm(ptr, len));
    };

    function init(path_or_module) {
        let instantiation;
        const imports = { './profiler_get_symbols': __exports };
        if (path_or_module instanceof WebAssembly.Module) {
            instantiation = WebAssembly.instantiate(path_or_module, imports)
            .then(instance => {
            return { instance, module: path_or_module }
        });
    } else {
        const data = fetch(path_or_module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            instantiation = WebAssembly.instantiateStreaming(data, imports);
        } else {
            instantiation = data
            .then(response => response.arrayBuffer())
            .then(buffer => WebAssembly.instantiate(buffer, imports));
        }
    }
    return instantiation.then(({instance}) => {
        wasm = init.wasm = instance.exports;
        return;
    });
};
self.wasm_bindgen = Object.assign(init, __exports);
})();
