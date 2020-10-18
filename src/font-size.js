import {eighthRemStyle, sixteenthRemStyle} from './base-unit'

export function fontSize(fontSize) {
    return { fontSize }
}

const sixteenthRemFontSize = sixteenthRemStyle(fontSize)
export const extremelySmallFontSize = sixteenthRemFontSize(12)
export const verySmallFontSize = sixteenthRemFontSize(13)
export const smallFontSize = sixteenthRemFontSize(14)
export const smallerFontSize = sixteenthRemFontSize(15)

const eighthRemFontSize = eighthRemStyle(fontSize)
export const normalFontSize = eighthRemFontSize(8)
export const slightlyLargerFontSize = eighthRemFontSize(9)
export const largerFontSize = eighthRemFontSize(10)
export const largeFontSize = eighthRemFontSize(12)
export const veryLargeFontSize = eighthRemFontSize(14)
export const largestFontSize = eighthRemFontSize(16)