import {joinWithCommaSpace} from 'standard-functions'
import {degrees} from './degrees'

export function rotate(degrees) {
    return `rotate(${degrees})`
}

export function scale(factor) {
    return `scale(${factor})`
}

export function skewX(skewX) {
    return `skewX(${skewX})`
}

export function skewY(skewY) {
    return `skewY(${skewY})`
}

export const rotateBy45Degrees = rotate(degrees(45))
export const rotateBy90Degrees = rotate(degrees(90))
export const rotateBy180Degrees = rotate(degrees(180))

export const rotateByMinus45Degrees = rotate(degrees(-45))
export const rotateByMinus90Degrees = rotate(degrees(-90))
export const rotateByMinus180Degrees = rotate(degrees(-180))

export function transform(...transformations) {
    return {
        transform: joinWithCommaSpace(transformations)
    }
}

export function transformOrigin(transformOrigin) {
    return {
        transformOrigin
    }
}