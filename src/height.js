import {quarterRemStyle} from './base-unit'

export function height(height) {
    return { height }
}

export const quarterRemHeight = quarterRemStyle(height)

export const height1 = quarterRemHeight(1)
export const height2 = quarterRemHeight(2)
export const height3 = quarterRemHeight(3)
export const height4 = quarterRemHeight(4)
export const height5 = quarterRemHeight(5)
export const height6 = quarterRemHeight(6)
export const height8 = quarterRemHeight(8)
export const height10 = quarterRemHeight(10)
export const height12 = quarterRemHeight(12)
export const height16 = quarterRemHeight(16)
export const height20 = quarterRemHeight(20)
export const height24 = quarterRemHeight(24)
export const height32 = quarterRemHeight(32)
export const height40 = quarterRemHeight(40)
export const height48 = quarterRemHeight(48)
export const height56 = quarterRemHeight(56)
export const height64 = quarterRemHeight(64)
export const height72 = quarterRemHeight(72)
export const height80 = quarterRemHeight(80)
export const height88 = quarterRemHeight(88)
export const height96 = quarterRemHeight(96)

export const thirdHeight = height('33.33333%')
export const halfHeight = height('50%')
export const fullHeight = height('100%')

export function minHeight(minHeight) {
    return { minHeight }
}

export function maxHeight(maxHeight) {
    return { maxHeight }
}

export const fullMinHeight = minHeight('100%')
