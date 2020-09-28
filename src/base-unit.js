import {keyValue, toString} from 'compose-functions'
import {eightRems, quarterRems} from './rem'

export function baseUnitStyle(applyUnits) {
    return createTag => units => createTag(applyUnits(units))
}

export const quarterRemStyle = baseUnitStyle(quarterRems)

export const eightRemStyle = baseUnitStyle(eightRems)

export const absoluteStyle = baseUnitStyle(toString)