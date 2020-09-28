import {quarterRemStyle} from './base-unit'

export function height(height) {
    return { height }
}


export const quarterRemHeight = quarterRemStyle(height)

export const height40 = quarterRemHeight(40)
export const height48 = quarterRemHeight(48)
export const height56 = quarterRemHeight(56)
export const height64 = quarterRemHeight(64)
export const height72 = quarterRemHeight(72)
export const height80 = quarterRemHeight(80)
export const height88 = quarterRemHeight(88)
export const height96 = quarterRemHeight(96)

export const fullHeight = height('100%')

export function minHeight(minHeight) {
    return { minHeight }
}

export const fullMinHeight = minHeight('100%')