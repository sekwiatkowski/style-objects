import {absoluteStyle} from './base-unit'

export const lineHeight = absoluteStyle(lineHeight => ({ lineHeight }))

export const normalLineHeight = lineHeight(1.5)

export const relaxedLineHeight = lineHeight(1.625)

export const veryRelaxedLineHeight = lineHeight(1.75)