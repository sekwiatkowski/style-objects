import {toString} from 'compose-functions'
import {eights, quarters} from './fractions'

export function rems(units) {
    return toString(units) + 'rem'
}

export function quarterRems(units) {
    return rems(quarters(units))
}

export function eightRems(units) {
    return rems(eights(units))
}
