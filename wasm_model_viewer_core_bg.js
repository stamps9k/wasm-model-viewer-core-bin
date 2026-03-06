export class EngineWebGl2 {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(EngineWebGl2.prototype);
        obj.__wbg_ptr = ptr;
        EngineWebGl2Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        EngineWebGl2Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_enginewebgl2_free(ptr, 0);
    }
    /**
     * @param {Map<any, any>} resources
     */
    constructor(resources) {
        const ret = wasm.enginewebgl2_new(resources);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        EngineWebGl2Finalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Map<any, any>} resources
     */
    update_scene(resources) {
        const ret = wasm.enginewebgl2_update_scene(this.__wbg_ptr, resources);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
}
if (Symbol.dispose) EngineWebGl2.prototype[Symbol.dispose] = EngineWebGl2.prototype.free;

export class WebGl2Frame {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WebGl2FrameFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_webgl2frame_free(ptr, 0);
    }
    /**
     * @param {Map<any, any>} resources
     */
    constructor(resources) {
        const ret = wasm.webgl2frame_new(resources);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        WebGl2FrameFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    set_projection() {
        wasm.webgl2frame_set_projection(this.__wbg_ptr);
    }
    /**
     * @param {Map<any, any>} resources
     */
    update_scene(resources) {
        const ret = wasm.webgl2frame_update_scene(this.__wbg_ptr, resources);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
}
if (Symbol.dispose) WebGl2Frame.prototype[Symbol.dispose] = WebGl2Frame.prototype.free;

export function disable_rotate_x() {
    wasm.disable_rotate_x();
}

export function disable_rotate_y() {
    wasm.disable_rotate_y();
}

export function disable_rotate_z() {
    wasm.disable_rotate_z();
}

export function enable_rotate_x() {
    wasm.enable_rotate_x();
}

export function enable_rotate_y() {
    wasm.enable_rotate_y();
}

export function enable_rotate_z() {
    wasm.enable_rotate_z();
}

/**
 * @param {Map<any, any>} resources
 * @returns {EngineWebGl2}
 */
export function initialize_web_gl(resources) {
    const ret = wasm.initialize_web_gl(resources);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return EngineWebGl2.__wrap(ret[0]);
}

/**
 * @param {string} message
 */
export function rust_error(message) {
    const ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.rust_error(ptr0, len0);
}

/**
 * @param {string} message
 */
export function rust_info(message) {
    const ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.rust_info(ptr0, len0);
}

/**
 * @param {string} message
 */
export function rust_super_super_verbose(message) {
    const ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.rust_super_super_verbose(ptr0, len0);
}

/**
 * @param {string} message
 */
export function rust_super_verbose(message) {
    const ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.rust_super_verbose(ptr0, len0);
}

/**
 * @param {string} message
 */
export function rust_verbose(message) {
    const ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.rust_verbose(ptr0, len0);
}

/**
 * @param {string} message
 */
export function rust_warn(message) {
    const ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.rust_warn(ptr0, len0);
}

/**
 * @param {number} fps
 */
export function set_fps(fps) {
    wasm.set_fps(fps);
}

/**
 * @param {EngineWebGl2} engine
 * @param {Map<any, any>} resources
 * @returns {EngineWebGl2}
 */
export function update_scene(engine, resources) {
    _assertClass(engine, EngineWebGl2);
    var ptr0 = engine.__destroy_into_raw();
    const ret = wasm.update_scene(ptr0, resources);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return EngineWebGl2.__wrap(ret[0]);
}
export function __wbg___wbindgen_boolean_get_18c4ed9422296fff(arg0) {
    const v = arg0;
    const ret = typeof(v) === 'boolean' ? v : undefined;
    return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
}
export function __wbg___wbindgen_debug_string_ddde1867f49c2442(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_is_function_d633e708baf0d146(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
}
export function __wbg___wbindgen_is_undefined_c18285b9fc34cb7d(arg0) {
    const ret = arg0 === undefined;
    return ret;
}
export function __wbg___wbindgen_number_get_5854912275df1894(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
}
export function __wbg___wbindgen_string_get_3e5751597f39a112(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_throw_39bc967c0e5a9b58(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg__wbg_cb_unref_b6d832240a919168(arg0) {
    arg0._wbg_cb_unref();
}
export function __wbg_activeTexture_64564eacfd432771(arg0, arg1) {
    arg0.activeTexture(arg1 >>> 0);
}
export function __wbg_addEventListener_c4f780106c414839() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
}, arguments); }
export function __wbg_attachShader_a565d8643aae908a(arg0, arg1, arg2) {
    arg0.attachShader(arg1, arg2);
}
export function __wbg_bindBuffer_b2db7cf886fca9a3(arg0, arg1, arg2) {
    arg0.bindBuffer(arg1 >>> 0, arg2);
}
export function __wbg_bindTexture_e67d6c16a2fe173f(arg0, arg1, arg2) {
    arg0.bindTexture(arg1 >>> 0, arg2);
}
export function __wbg_bindVertexArray_2d06af8aef338098(arg0, arg1) {
    arg0.bindVertexArray(arg1);
}
export function __wbg_bufferData_e5478d2317e9784b(arg0, arg1, arg2, arg3) {
    arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
}
export function __wbg_call_08ad0d89caa7cb79() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.call(arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_clearColor_c938ae0d32371f29(arg0, arg1, arg2, arg3, arg4) {
    arg0.clearColor(arg1, arg2, arg3, arg4);
}
export function __wbg_clear_1ba9d21e0b0d5b09(arg0, arg1) {
    arg0.clear(arg1 >>> 0);
}
export function __wbg_clientX_810042c308568d39(arg0) {
    const ret = arg0.clientX;
    return ret;
}
export function __wbg_clientY_ddce2da9c948105f(arg0) {
    const ret = arg0.clientY;
    return ret;
}
export function __wbg_compileShader_f1cddf9f87e77812(arg0, arg1) {
    arg0.compileShader(arg1);
}
export function __wbg_createBuffer_7336552d8cc9b64d(arg0) {
    const ret = arg0.createBuffer();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createProgram_297462ff29413ff9(arg0) {
    const ret = arg0.createProgram();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createShader_09f6467c8809e6b7(arg0, arg1) {
    const ret = arg0.createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createTexture_80f7867d3560dc55(arg0) {
    const ret = arg0.createTexture();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_createVertexArray_96dfeee9b03b8759(arg0) {
    const ret = arg0.createVertexArray();
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_depthFunc_5e62d8faac8e3ece(arg0, arg1) {
    arg0.depthFunc(arg1 >>> 0);
}
export function __wbg_document_0b7613236d782ccc(arg0) {
    const ret = arg0.document;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_drawElements_03e965e6fcfa5a40(arg0, arg1, arg2, arg3, arg4) {
    arg0.drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
}
export function __wbg_enableVertexAttribArray_40936ba18e230cf5(arg0, arg1) {
    arg0.enableVertexAttribArray(arg1 >>> 0);
}
export function __wbg_enable_78a8f9933e5177b4(arg0, arg1) {
    arg0.enable(arg1 >>> 0);
}
export function __wbg_error_a6fa202b58aa1cd3(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
    }
}
export function __wbg_generateMipmap_058f322ad3b16640(arg0, arg1) {
    arg0.generateMipmap(arg1 >>> 0);
}
export function __wbg_getAttribLocation_11d43b91b133e228(arg0, arg1, arg2, arg3) {
    const ret = arg0.getAttribLocation(arg1, getStringFromWasm0(arg2, arg3));
    return ret;
}
export function __wbg_getContext_04fd91bf79400077() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_getElementById_dff2c0f6070bc31a(arg0, arg1, arg2) {
    const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_getProgramInfoLog_5756ac0562379f54(arg0, arg1, arg2) {
    const ret = arg1.getProgramInfoLog(arg2);
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getProgramParameter_3cfccd1428215c8e(arg0, arg1, arg2) {
    const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
    return ret;
}
export function __wbg_getRandomValues_3f44b700395062e5() { return handleError(function (arg0, arg1) {
    globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
}, arguments); }
export function __wbg_getShaderInfoLog_18f68e3c08cab42c(arg0, arg1, arg2) {
    const ret = arg1.getShaderInfoLog(arg2);
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_getShaderParameter_cb466becc20c6e27(arg0, arg1, arg2) {
    const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
    return ret;
}
export function __wbg_getUniformLocation_30446f6d89535e6c(arg0, arg1, arg2, arg3) {
    const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_get_18349afdb36339a9() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(arg0, arg1);
    return ret;
}, arguments); }
export function __wbg_get_1ffd0ef2262f24e3(arg0, arg1) {
    const ret = arg0.get(arg1);
    return ret;
}
export function __wbg_instanceof_HtmlCanvasElement_d8fa699a8663ca1b(arg0) {
    let result;
    try {
        result = arg0 instanceof HTMLCanvasElement;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_MouseEvent_e352cc112a788d5c(arg0) {
    let result;
    try {
        result = arg0 instanceof MouseEvent;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_WebGl2RenderingContext_8bea2dcac1bc6243(arg0) {
    let result;
    try {
        result = arg0 instanceof WebGL2RenderingContext;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_Window_4aba49e4d1a12365(arg0) {
    let result;
    try {
        result = arg0 instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_linkProgram_81931e457dc6efc0(arg0, arg1) {
    arg0.linkProgram(arg1);
}
export function __wbg_log_3c5e4b64af29e724(arg0) {
    console.log(arg0);
}
export function __wbg_new_227d7c05414eb861() {
    const ret = new Error();
    return ret;
}
export function __wbg_new_from_slice_d7e202fdbee3c396(arg0, arg1) {
    const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
    return ret;
}
export function __wbg_now_b134ec02cd6d8b88(arg0) {
    const ret = arg0.now();
    return ret;
}
export function __wbg_outerHeight_e7a541a820ad9453() { return handleError(function (arg0) {
    const ret = arg0.outerHeight;
    return ret;
}, arguments); }
export function __wbg_outerWidth_0b848eb56995b0e7() { return handleError(function (arg0) {
    const ret = arg0.outerWidth;
    return ret;
}, arguments); }
export function __wbg_performance_14d1bb70cebe5f40(arg0) {
    const ret = arg0.performance;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_requestAnimationFrame_a3d50e525d8e209e() { return handleError(function (arg0, arg1) {
    const ret = arg0.requestAnimationFrame(arg1);
    return ret;
}, arguments); }
export function __wbg_shaderSource_fd677c89c8b82c95(arg0, arg1, arg2, arg3) {
    arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
}
export function __wbg_stack_3b0d974bbf31e44f(arg0, arg1) {
    const ret = arg1.stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_static_accessor_GLOBAL_THIS_14325d8cca34bb77() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_GLOBAL_f3a1e69f9c5a7e8e() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_SELF_50cdb5b517789aca() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_WINDOW_d6c4126e4c244380() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_texImage2D_1205f4bade672537() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
}, arguments); }
export function __wbg_toString_7e063c91ac1babf5(arg0) {
    const ret = arg0.toString();
    return ret;
}
export function __wbg_uniform1f_5659911af16ec766(arg0, arg1, arg2) {
    arg0.uniform1f(arg1, arg2);
}
export function __wbg_uniform2fv_1f6882fe059eb80d(arg0, arg1, arg2, arg3) {
    arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
}
export function __wbg_uniformMatrix4fv_5f024e3e3fb7b6b1(arg0, arg1, arg2, arg3, arg4) {
    arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
}
export function __wbg_useProgram_c86286bf2a0c907a(arg0, arg1) {
    arg0.useProgram(arg1);
}
export function __wbg_vertexAttribPointer_5fae23082137507b(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
}
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 60, function: Function { arguments: [NamedExternref("MouseEvent")], shim_idx: 61, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h21ad5149ab061324, wasm_bindgen__convert__closures_____invoke__hfd7dd9b55ab67e19);
    return ret;
}
export function __wbindgen_cast_0000000000000002(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 60, function: Function { arguments: [], shim_idx: 63, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h21ad5149ab061324, wasm_bindgen__convert__closures_____invoke__h34e51b1b792f4171);
    return ret;
}
export function __wbindgen_cast_0000000000000003(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return ret;
}
export function __wbindgen_cast_0000000000000004(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
    const ret = getArrayF32FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000005(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
    const ret = getArrayU16FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000006(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}
function wasm_bindgen__convert__closures_____invoke__h34e51b1b792f4171(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__h34e51b1b792f4171(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__hfd7dd9b55ab67e19(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__hfd7dd9b55ab67e19(arg0, arg1, arg2);
}

const EngineWebGl2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_enginewebgl2_free(ptr >>> 0, 1));
const WebGl2FrameFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_webgl2frame_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
