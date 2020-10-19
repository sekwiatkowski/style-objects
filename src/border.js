import {joinWithSpace, keyValue} from 'compose-functions'

function createBorder(property) {
    return (width, style, color) => keyValue(property) (joinWithSpace([width, style, color]))
}

export const border = createBorder('border')

export const borderTop = createBorder('borderTop')
export const borderRight = createBorder('borderRight')
export const borderBottom = createBorder('borderBottom')
export const borderLeft = createBorder('borderLeft')

export function createBorderWidth(side) {
    return width => ({side: width})
}

export const borderWidth = createBorderWidth('border')
export const borderTopWidth = createBorderWidth('borderTop')
export const borderRightWidth = createBorderWidth('borderRight')
export const borderBottomWidth = createBorderWidth('borderBottom')
export const borderLeftWidth = createBorderWidth('borderLeft')

export function createBorderStyle(side) {
    return width => ({side: width})
}

export const borderStyle = createBorderStyle('border')
export const borderTopStyle = createBorderStyle('borderTop')
export const borderRightStyle = createBorderStyle('borderRight')
export const borderBottomStyle = createBorderStyle('borderBottom')
export const borderLeftStyle = createBorderStyle('borderLeft')

export function createBorderColor(side) {
    return width => ({side: width})
}

export const borderColor = createBorderColor('border')
export const borderTopColor = createBorderColor('borderTop')
export const borderRightColor = createBorderColor('borderRight')
export const borderBottomColor = createBorderColor('borderBottom')
export const borderLeftColor = createBorderColor('borderLeft')