import {sixteenthRemStyle} from './base-unit'
import {merge} from 'standard-functions'

function topRightRadius(borderTopRightRadius) {
    return { borderTopRightRadius }
}

function bottomRightRadius(borderBottomRightRadius) {
    return { borderBottomRightRadius }
}

function rightRadius(radius) {
    return merge(topRightRadius(radius), bottomRightRadius(radius))
}

function bottomLeftRadius(borderBottomLeftRadius) {
    return { borderBottomLeftRadius }
}

function topLeftRadius(borderTopLeftRadius) {
    return { borderTopLeftRadius }
}

function leftRadius(radius) {
    return merge(topLeftRadius(radius), bottomLeftRadius(radius))
}

function radius(borderRadius) {
    return {borderRadius}
}

const sixteenthRemRadius = sixteenthRemStyle(radius)
const sixteenthRemLeftRadius = sixteenthRemStyle(leftRadius)
const sixteenthRemRightRadius = sixteenthRemStyle(rightRadius)

export const leftRadius1 = sixteenthRemLeftRadius(1)
export const leftRadius2 = sixteenthRemLeftRadius(2)
export const leftRadius3 = sixteenthRemLeftRadius(3)
export const leftRadius4 = sixteenthRemLeftRadius(4)

export const rightRadius1 = sixteenthRemRightRadius(1)
export const rightRadius2 = sixteenthRemRightRadius(2)
export const rightRadius3 = sixteenthRemRightRadius(3)
export const rightRadius4 = sixteenthRemRightRadius(4)

export const radius1 = sixteenthRemRadius(1)
export const radius2 = sixteenthRemRadius(2)
export const radius3 = sixteenthRemRadius(3)
export const radius4 = sixteenthRemRadius(4)

export const fullyRounded = radius('9999px')