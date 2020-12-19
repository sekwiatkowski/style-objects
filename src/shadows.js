import {joinWithCommaSpace, joinWithSpace} from 'standard-functions'

export function shadow(offsetX, offsetY, blur, spreadRadius, color) {
    return joinWithSpace(offsetX, offsetY, blur, spreadRadius, color)
}

export function boxShadow(...shadows) {
    return {
        boxShadow: joinWithCommaSpace(shadows)
    }
}

export const noBoxShadow = boxShadow('none')