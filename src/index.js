// https://vuejs.org/api/custom-renderer

import { createRenderer } from '@vue/runtime-core'

import { nodeOps } from './nodeOps.js'
import { patchProp } from './patchProp.js'

const rendererOptions = {
    patchProp,
    ...nodeOps,
}

// `render` is the low-level API
// `createApp` returns an app instance
export const { render, createApp } = createRenderer(rendererOptions)

// re-export Vue core APIs
// h, Component, reactivity API, nextTick, flags & types
export * from '@vue/runtime-core'
