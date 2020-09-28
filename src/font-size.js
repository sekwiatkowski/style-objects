import {eighthRemStyle} from './base-unit'

export function fontSize(fontSize) {
    return { fontSize }
}

const eighthRemFontSize = eighthRemStyle(fontSize)

export const smallFontSize = eighthRemFontSize(6)

export const smallerFontSize = eighthRemFontSize(7)

export const normalFontSize = eighthRemFontSize(8)

export const slightlyLargerFontSize = eighthRemFontSize(9)

export const largerFontSize = eighthRemFontSize(10)

export const largeFontSize = eighthRemFontSize(12)

export const veryLargeFontSize = eighthRemFontSize(14)

export const largestFontSize = eighthRemFontSize(16)