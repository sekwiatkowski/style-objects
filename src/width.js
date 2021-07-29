import {quarterRemStyle} from './base-unit'

export function width(width) {
    return { width }
}

export const quarterRemWidth = quarterRemStyle(width)

export const width1 = quarterRemWidth(1)
export const width2 = quarterRemWidth(2)
export const width3 = quarterRemWidth(3)
export const width4 = quarterRemWidth(4)
export const width5 = quarterRemWidth(5)
export const width6 = quarterRemWidth(6)
export const width8 = quarterRemWidth(8)
export const width10 = quarterRemWidth(10)
export const width12 = quarterRemWidth(12)
export const width16 = quarterRemWidth(16)
export const width20 = quarterRemWidth(20)
export const width24 = quarterRemWidth(24)
export const width32 = quarterRemWidth(32)
export const width40 = quarterRemWidth(40)
export const width48 = quarterRemWidth(48)
export const width56 = quarterRemWidth(56)
export const width64 = quarterRemWidth(64)
export const width72 = quarterRemWidth(72)
export const width80 = quarterRemWidth(80)
export const width88 = quarterRemWidth(88)
export const width96 = quarterRemWidth(96)

export const thirdWidth = width('33.33333%')
export const halfWidth = width('50%')
export const fullWidth = width('100%')

export function minWidth(minWidth) {
    return { minWidth }
}

export function maxWidth(maxWidth) {
    return { maxWidth }
}
