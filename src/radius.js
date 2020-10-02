import {quarterRemStyle} from './base-unit'
import {merge} from 'compose-functions'

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

function radius(radius) {
    return merge(leftRadius(radius), rightRadius(radius))
}

const eighthRemRadius = quarterRemStyle(radius())
const eighthRemLeftRadius = quarterRemStyle(leftRadius)
const eighthRemRightRadius = quarterRemStyle(rightRadius)

export const leftRadius1 = eighthRemLeftRadius(1)
export const leftRadius2 = eighthRemLeftRadius(2)
export const leftRadius3 = eighthRemLeftRadius(3)

export const rightRadius1 = eighthRemRightRadius(1)
export const rightRadius2 = eighthRemRightRadius(2)
export const rightRadius3 = eighthRemRightRadius(3)

export const radius1 = eighthRemRadius(1)
export const radius2 = eighthRemRadius(2)
export const radius3 = eighthRemRadius(3)