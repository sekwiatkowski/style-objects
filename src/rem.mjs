import {toString} from 'standard-functions'
import {eighths, quarters, sixteenths} from './fractions.mjs'

export function rems(units) {
    return toString(units) + 'rem'
}

export function quarterRems(units) {
    return rems(quarters(units))
}

export function eighthRems(units) {
    return rems(eighths(units))
}

export function sixteenthRems(units) {
    return rems(sixteenths(units))
}
