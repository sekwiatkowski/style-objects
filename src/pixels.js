import {toString} from 'standard-functions'
import {eighths, quarters, sixteenths} from './fractions'

export function pixels(units) {
    return toString(units) + 'px'
}