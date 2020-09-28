import {joinWithSpace, keyValue} from 'compose-functions'

function createBorder(property) {
    return (width, style, color) => keyValue(property) (joinWithSpace([width, style, color]))
}

export const border = createBorder('border')

export const borderTop = createBorder('borderTop')
export const borderRight = createBorder('borderRight')
export const borderBottom = createBorder('borderBottom')
export const borderLeft = createBorder('borderLeft')
