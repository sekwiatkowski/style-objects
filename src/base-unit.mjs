import {toString} from 'standard-functions'
import {eighthRems, quarterRems, sixteenthRems} from './rem.mjs'

export function baseUnitStyle(applyUnits) {
    return createTag => units => createTag(applyUnits(units))
}

export const quarterRemStyle = baseUnitStyle(quarterRems)

export const eighthRemStyle = baseUnitStyle(eighthRems)

export const sixteenthRemStyle = baseUnitStyle(sixteenthRems)

export const absoluteStyle = baseUnitStyle(toString)