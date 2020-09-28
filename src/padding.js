import {quarterRemStyle} from './base-unit'
import {merge} from 'compose-functions'

export function padding(padding) {
    return { padding }
}

export function paddingTop(paddingTop) {
    return { paddingTop }
}

export function paddingRight(paddingRight) {
    return { paddingRight }
}

export function paddingBottom(paddingBottom) {
    return { paddingBottom }
}

export function paddingLeft(paddingLeft) {
    return { paddingLeft }
}

export const quarterRemPadding = quarterRemStyle(padding)
export const quarterRemPaddingTop = quarterRemStyle(paddingTop)
export const quarterRemPaddingRight = quarterRemStyle(paddingRight)
export const quarterRemPaddingBottom = quarterRemStyle(paddingBottom)
export const quarterRemPaddingLeft = quarterRemStyle(paddingLeft)

function quarterRemHorizontalPadding(units) {
    return merge(quarterRemPaddingLeft(units), quarterRemPaddingRight(units))
}

function quarterRemVerticalPadding(units) {
    return merge(quarterRemPaddingTop(units), quarterRemPaddingBottom(units))
}

export const padding1 = quarterRemPadding(1)
export const padding2 = quarterRemPadding(2)
export const padding3 = quarterRemPadding(3)
export const padding4 = quarterRemPadding(4)
export const padding5 = quarterRemPadding(5)
export const padding6 = quarterRemPadding(6)
export const padding8 = quarterRemPadding(8)
export const padding10 = quarterRemPadding(10)
export const padding12 = quarterRemPadding(12)
export const padding16 = quarterRemPadding(16)
export const padding20 = quarterRemPadding(20)

export const paddingTop1 = quarterRemPaddingTop(1)
export const paddingTop2 = quarterRemPaddingTop(2)
export const paddingTop3 = quarterRemPaddingTop(3)
export const paddingTop4 = quarterRemPaddingTop(4)
export const paddingTop5 = quarterRemPaddingTop(5)
export const paddingTop6 = quarterRemPaddingTop(6)
export const paddingTop8 = quarterRemPaddingTop(8)
export const paddingTop10 = quarterRemPaddingTop(10)
export const paddingTop12 = quarterRemPaddingTop(12)
export const paddingTop16 = quarterRemPaddingTop(16)
export const paddingTop20 = quarterRemPaddingTop(20)

export const paddingRight1 = quarterRemPaddingRight(1)
export const paddingRight2 = quarterRemPaddingRight(2)
export const paddingRight3 = quarterRemPaddingRight(3)
export const paddingRight4 = quarterRemPaddingRight(4)
export const paddingRight5 = quarterRemPaddingRight(5)
export const paddingRight6 = quarterRemPaddingRight(6)
export const paddingRight8 = quarterRemPaddingRight(8)
export const paddingRight10 = quarterRemPaddingRight(10)
export const paddingRight12 = quarterRemPaddingRight(12)
export const paddingRight16 = quarterRemPaddingRight(16)
export const paddingRight20 = quarterRemPaddingRight(20)

export const paddingBottom1 = quarterRemPaddingBottom(1)
export const paddingBottom2 = quarterRemPaddingBottom(2)
export const paddingBottom3 = quarterRemPaddingBottom(3)
export const paddingBottom4 = quarterRemPaddingBottom(4)
export const paddingBottom5 = quarterRemPaddingBottom(5)
export const paddingBottom6 = quarterRemPaddingBottom(6)
export const paddingBottom8 = quarterRemPaddingBottom(8)
export const paddingBottom10 = quarterRemPaddingBottom(10)
export const paddingBottom12 = quarterRemPaddingBottom(12)
export const paddingBottom16 = quarterRemPaddingBottom(16)
export const paddingBottom20 = quarterRemPaddingBottom(20)

export const paddingLeft1 = quarterRemPaddingLeft(1)
export const paddingLeft2 = quarterRemPaddingLeft(2)
export const paddingLeft3 = quarterRemPaddingLeft(3)
export const paddingLeft4 = quarterRemPaddingLeft(4)
export const paddingLeft5 = quarterRemPaddingLeft(5)
export const paddingLeft6 = quarterRemPaddingLeft(6)
export const paddingLeft8 = quarterRemPaddingLeft(8)
export const paddingLeft10 = quarterRemPaddingLeft(10)
export const paddingLeft12 = quarterRemPaddingLeft(12)
export const paddingLeft16 = quarterRemPaddingLeft(16)
export const paddingLeft20 = quarterRemPaddingLeft(20)

export const horizontalPadding1 = quarterRemHorizontalPadding(1)
export const horizontalPadding2 = quarterRemHorizontalPadding(2)
export const horizontalPadding3 = quarterRemHorizontalPadding(3)
export const horizontalPadding4 = quarterRemHorizontalPadding(4)
export const horizontalPadding5 = quarterRemHorizontalPadding(5)
export const horizontalPadding6 = quarterRemHorizontalPadding(6)
export const horizontalPadding8 = quarterRemHorizontalPadding(8)
export const horizontalPadding10 = quarterRemHorizontalPadding(10)
export const horizontalPadding12 = quarterRemHorizontalPadding(12)
export const horizontalPadding16 = quarterRemHorizontalPadding(16)
export const horizontalPadding20 = quarterRemHorizontalPadding(20)

export const verticalPadding1 = quarterRemVerticalPadding(1)
export const verticalPadding2 = quarterRemVerticalPadding(2)
export const verticalPadding3 = quarterRemVerticalPadding(3)
export const verticalPadding4 = quarterRemVerticalPadding(4)
export const verticalPadding5 = quarterRemVerticalPadding(5)
export const verticalPadding6 = quarterRemVerticalPadding(6)
export const verticalPadding8 = quarterRemVerticalPadding(8)
export const verticalPadding10 = quarterRemVerticalPadding(10)
export const verticalPadding12 = quarterRemVerticalPadding(12)
export const verticalPadding16 = quarterRemVerticalPadding(16)
export const verticalPadding20 = quarterRemVerticalPadding(20)