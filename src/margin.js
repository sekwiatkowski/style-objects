import {quarterRem} from './rem'

export function margin(margin) {
    return {margin}
}
export function marginTop(marginTop) {
    return {marginTop}
}
export function marginRight(marginRight) {
    return {marginRight}
}
export function marginBottom(marginBottom) {
    return {marginBottom}
}
export function marginLeft(marginLeft) {
    return {marginLeft}
}

const quarterRemMargin = quarterRem('margin')
const quarterRemMarginTop = quarterRem('marginTop')
const quarterRemMarginRight = quarterRem('marginRight')
const quarterRemMarginBottom = quarterRem('marginBottom')
const quarterRemMarginLeft = quarterRem('marginLeft')

export const margin1 = quarterRemMargin(1)
export const margin2 = quarterRemMargin(2)
export const margin3 = quarterRemMargin(3)
export const margin4 = quarterRemMargin(4)
export const margin5 = quarterRemMargin(5)
export const margin6 = quarterRemMargin(6)
export const margin8 = quarterRemMargin(8)
export const margin10 = quarterRemMargin(10)
export const margin12 = quarterRemMargin(12)
export const margin16 = quarterRemMargin(16)
export const margin20 = quarterRemMargin(20)

export const marginTop1 = quarterRemMarginTop(1)
export const marginTop2 = quarterRemMarginTop(2)
export const marginTop3 = quarterRemMarginTop(3)
export const marginTop4 = quarterRemMarginTop(4)
export const marginTop5 = quarterRemMarginTop(5)
export const marginTop6 = quarterRemMarginTop(6)
export const marginTop8 = quarterRemMarginTop(8)
export const marginTop10 = quarterRemMarginTop(10)
export const marginTop12 = quarterRemMarginTop(12)
export const marginTop16 = quarterRemMarginTop(16)
export const marginTop20 = quarterRemMarginTop(20)

export const marginRight1 = quarterRemMarginRight(1)
export const marginRight2 = quarterRemMarginRight(2)
export const marginRight3 = quarterRemMarginRight(3)
export const marginRight4 = quarterRemMarginRight(4)
export const marginRight5 = quarterRemMarginRight(5)
export const marginRight6 = quarterRemMarginRight(6)
export const marginRight8 = quarterRemMarginRight(8)
export const marginRight10 = quarterRemMarginRight(10)
export const marginRight12 = quarterRemMarginRight(12)
export const marginRight16 = quarterRemMarginRight(16)
export const marginRight20 = quarterRemMarginRight(20)

export const marginBottom1 = quarterRemMarginBottom(1)
export const marginBottom2 = quarterRemMarginBottom(2)
export const marginBottom3 = quarterRemMarginBottom(3)
export const marginBottom4 = quarterRemMarginBottom(4)
export const marginBottom5 = quarterRemMarginBottom(5)
export const marginBottom6 = quarterRemMarginBottom(6)
export const marginBottom8 = quarterRemMarginBottom(8)
export const marginBottom10 = quarterRemMarginBottom(10)
export const marginBottom12 = quarterRemMarginBottom(12)
export const marginBottom16 = quarterRemMarginBottom(16)
export const marginBottom20 = quarterRemMarginBottom(20)

export const marginLeft1 = quarterRemMarginLeft(1)
export const marginLeft2 = quarterRemMarginLeft(2)
export const marginLeft3 = quarterRemMarginLeft(3)
export const marginLeft4 = quarterRemMarginLeft(4)
export const marginLeft5 = quarterRemMarginLeft(5)
export const marginLeft6 = quarterRemMarginLeft(6)
export const marginLeft8 = quarterRemMarginLeft(8)
export const marginLeft10 = quarterRemMarginLeft(10)
export const marginLeft12 = quarterRemMarginLeft(12)
export const marginLeft16 = quarterRemMarginLeft(16)
export const marginLeft20 = quarterRemMarginLeft(20)

export const center = {marginLeft: 'auto', marginRight: 'auto'}