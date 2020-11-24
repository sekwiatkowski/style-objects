import {joinWithCommaSpace} from 'standard-functions'

function rotate(degrees) {
    return `rotate(${degrees}deg)`
}

export function scale(factor) {
    return `scale(${factor})`
}

export const rotateBy90Degrees = rotate(90)
export const rotateBy180Degrees = rotate(180)

export function transform(...transformations) {
    return {
        transform: joinWithCommaSpace(transformations)
    }
}