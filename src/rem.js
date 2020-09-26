import {baseUnitStyle, quarters} from './base-unit'

export function rems(units) {
    return units.toString() + 'rem'
}

export const quarterRems = baseUnitStyle(units => rems(quarters(units)))
