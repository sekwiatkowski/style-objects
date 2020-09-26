import {baseUnitStyle, quarters} from './base-unit'
import {toString} from 'compose-functions'

export function rems(units) {
    return toString(units) + 'rem'
}

export const quarterRems = baseUnitStyle(units => rems(quarters(units)))
