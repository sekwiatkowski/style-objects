import {joinWithCommaSpace, joinWithSpace} from 'compose-functions'

function shadow(offsetX, offsetY, blur, spreadRadius, color) {
    return joinWithSpace([offsetX, offsetY, blur, spreadRadius, color])
}

function boxShadow(shadows) {
    return {
        boxShadow: joinWithCommaSpace(shadows)
    }
}