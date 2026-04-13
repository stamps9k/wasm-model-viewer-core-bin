/* tslint:disable */
/* eslint-disable */

export class EngineWebGl2 {
    free(): void;
    [Symbol.dispose](): void;
    constructor(resources: Map<any, any>);
    update_scene(resources: Map<any, any>): void;
}

export class WebGl2Frame {
    free(): void;
    [Symbol.dispose](): void;
    constructor(resources: Map<any, any>);
    set_projection(): void;
    update_scene(resources: Map<any, any>): void;
}

export function disable_rotate_x(): void;

export function disable_rotate_y(): void;

export function disable_rotate_z(): void;

export function disable_zoom_in(): void;

export function disable_zoom_out(): void;

export function enable_rotate_x(): void;

export function enable_rotate_y(): void;

export function enable_rotate_z(): void;

export function enable_zoom_in(): void;

export function enable_zoom_out(): void;

export function initialize_web_gl(resources: Map<any, any>): EngineWebGl2;

export function rust_log(message: string, level: string): void;

export function set_fps(fps: number): void;

export function update_scene(engine: EngineWebGl2, resources: Map<any, any>): EngineWebGl2;
