import {toString} from 'compose-functions'

export function rems(units) {
    return toString(units) + 'rem'
}

export function quarterRem(name) {
    return units => ({ [name]: rems(units * 0.25) })
}