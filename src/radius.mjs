import {sixteenthRemStyle} from './base-unit.mjs'
import {merge} from 'standard-functions'

export function topRightRadius(borderTopRightRadius) {
    return { borderTopRightRadius }
}

export function rightRadius(radius) {
    return merge(topRightRadius(radius), bottomRightRadius(radius))
}

export function bottomRightRadius(borderBottomRightRadius) {
    return { borderBottomRightRadius }
}

export function bottomLeftRadius(borderBottomLeftRadius) {
    return { borderBottomLeftRadius }
}

export function leftRadius(radius) {
    return merge(topLeftRadius(radius), bottomLeftRadius(radius))
}

export function topLeftRadius(borderTopLeftRadius) {
    return { borderTopLeftRadius }
}

export function radius(borderRadius) {
    return {borderRadius}
}

const sixteenthRemRadius = sixteenthRemStyle(radius)

const sixteenthRemLeftRadius = sixteenthRemStyle(leftRadius)
const sixteenthRemTopLeftRadius = sixteenthRemStyle(topLeftRadius)
const sixteenthRemBottomLeftRadius = sixteenthRemStyle(bottomLeftRadius)

const sixteenthRemRightRadius = sixteenthRemStyle(rightRadius)
const sixteenthRemTopRightRadius = sixteenthRemStyle(topRightRadius)
const sixteenthRemBottomRightRadius = sixteenthRemStyle(bottomRightRadius)

export const leftRadius1 = sixteenthRemLeftRadius(1)
export const leftRadius2 = sixteenthRemLeftRadius(2)
export const leftRadius3 = sixteenthRemLeftRadius(3)
export const leftRadius4 = sixteenthRemLeftRadius(4)
export const leftRadius5 = sixteenthRemLeftRadius(5)
export const leftRadius6 = sixteenthRemLeftRadius(6)

export const topLeftRadius1 = sixteenthRemTopLeftRadius(1)
export const topLeftRadius2 = sixteenthRemTopLeftRadius(2)
export const topLeftRadius3 = sixteenthRemTopLeftRadius(3)
export const topLeftRadius4 = sixteenthRemTopLeftRadius(4)
export const topLeftRadius5 = sixteenthRemTopLeftRadius(5)
export const topLeftRadius6 = sixteenthRemTopLeftRadius(6)

export const bottomLeftRadius1 = sixteenthRemBottomLeftRadius(1)
export const bottomLeftRadius2 = sixteenthRemBottomLeftRadius(2)
export const bottomLeftRadius3 = sixteenthRemBottomLeftRadius(3)
export const bottomLeftRadius4 = sixteenthRemBottomLeftRadius(4)
export const bottomLeftRadius5 = sixteenthRemBottomLeftRadius(5)
export const bottomLeftRadius6 = sixteenthRemBottomLeftRadius(6)

export const rightRadius1 = sixteenthRemRightRadius(1)
export const rightRadius2 = sixteenthRemRightRadius(2)
export const rightRadius3 = sixteenthRemRightRadius(3)
export const rightRadius4 = sixteenthRemRightRadius(4)
export const rightRadius5 = sixteenthRemRightRadius(5)
export const rightRadius6 = sixteenthRemRightRadius(6)

export const topRightRadius1 = sixteenthRemTopRightRadius(1)
export const topRightRadius2 = sixteenthRemTopRightRadius(2)
export const topRightRadius3 = sixteenthRemTopRightRadius(3)
export const topRightRadius4 = sixteenthRemTopRightRadius(4)
export const topRightRadius5 = sixteenthRemTopRightRadius(5)
export const topRightRadius6 = sixteenthRemTopRightRadius(6)

export const bottomRightRadius1 = sixteenthRemBottomRightRadius(1)
export const bottomRightRadius2 = sixteenthRemBottomRightRadius(2)
export const bottomRightRadius3 = sixteenthRemBottomRightRadius(3)
export const bottomRightRadius4 = sixteenthRemBottomRightRadius(4)
export const bottomRightRadius5 = sixteenthRemBottomRightRadius(5)
export const bottomRightRadius6 = sixteenthRemBottomRightRadius(6)

export const radius1 = sixteenthRemRadius(1)
export const radius2 = sixteenthRemRadius(2)
export const radius3 = sixteenthRemRadius(3)
export const radius4 = sixteenthRemRadius(4)
export const radius5 = sixteenthRemRadius(5)
export const radius6 = sixteenthRemRadius(6)

export const fullyRounded = radius('9999px')