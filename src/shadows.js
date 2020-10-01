import {joinWithCommaSpace, joinWithSpace} from 'compose-functions'

export function shadow(offsetX, offsetY, blur, spreadRadius, color) {
    return joinWithSpace([offsetX, offsetY, blur, spreadRadius, color])
}

export function boxShadow(...shadows) {
    return {
        boxShadow: joinWithCommaSpace(shadows)
    }
}