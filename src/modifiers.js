import {isOfLengthOne, merge} from 'standard-functions'

function modifier(modifier) {
    return styles => {
        return {
            [':' + modifier]: isOfLengthOne(styles) ? styles[0] : merge(...styles)
        }
    }
}

export function visited(...styles) {
    return modifier ('visited') (styles)
}

export function hover(...styles) {
    return modifier ('hover') (styles)
}

export function active(...styles) {
    return modifier ('active') (styles)
}

export function focus(...styles) {
    return modifier ('focus') (styles)
}

export function focusVisible(...styles) {
    return modifier ('focus-visible') (styles)
}

export function before(...styles) {
    return modifier ('before') (styles)
}

export function after(...styles) {
    return modifier ('after') (styles)
}