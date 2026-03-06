/* @ts-self-types="./wasm_model_viewer_core.d.ts" */

import * as wasm from "./wasm_model_viewer_core_bg.wasm";
import { __wbg_set_wasm } from "./wasm_model_viewer_core_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
export {
    EngineWebGl2, WebGl2Frame, disable_rotate_x, disable_rotate_y, disable_rotate_z, enable_rotate_x, enable_rotate_y, enable_rotate_z, initialize_web_gl, rust_error, rust_info, rust_super_super_verbose, rust_super_verbose, rust_verbose, rust_warn, set_fps, update_scene
} from "./wasm_model_viewer_core_bg.js";
