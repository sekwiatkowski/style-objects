import {absoluteStyle} from './base-unit.mjs'

export const lineHeight = absoluteStyle(lineHeight => ({ lineHeight }))

export const tightLineHeight = lineHeight(1.0)

export const snugLineHeight = lineHeight(1.25)

export const normalLineHeight = lineHeight(1.5)

export const relaxedLineHeight = lineHeight(1.75)