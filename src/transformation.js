import {joinWithCommaSpace} from 'compose-functions'

function rotate(degrees) {
    return `rotate(${degrees}deg)`
}

export const rotateBy90Degrees = rotate(90)
export const rotateBy180Degrees = rotate(180)

export function transform(transformations) {
    return {
        transform: Array.isArray(transformations) ? joinWithCommaSpace(transformations) : input
    }
}