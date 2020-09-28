import {keyValue} from 'compose-functions'

function position(position) {
    return {position}
}

export const absolute = position('absolute')

export const relative = position('relative')

function side(side) {
    return value => keyValue(side)(value)
}

export const top = side('top')
export const right = side('right')
export const bottom = side('bottom')
export const left = side('left')

export const top0 = top('0')
export const right0 = right('0')
export const bottom0 = bottom('0')
export const left0 = left('0')