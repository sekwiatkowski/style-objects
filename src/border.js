import {capitalize, joinWithSpace, keyValue} from 'compose-functions'

function createBorder(property) {
    return (width, style, color) => keyValue(property) (joinWithSpace([width, style, color]))
}

export const border = createBorder('border')

export const borderTop = createBorder('borderTop')
export const borderRight = createBorder('borderRight')
export const borderBottom = createBorder('borderBottom')
export const borderLeft = createBorder('borderLeft')

export function borderProperty(property) {
    return value => {
        const key = 'border' + capitalize(property)

        return ({[key]: value})
    }
}

export const borderWidth = borderProperty('width')
export const borderStyle = borderProperty('style')
export const borderColor = borderProperty('color')

export function borderSideProperty(side) {
    return property => value => {
        const key = 'border' + capitalize(side) + capitalize(property)

        return ({[key]: value})
    }
}

const borderTopProperty = borderSideProperty('top')
const borderRightProperty = borderSideProperty('right')
const borderBottomProperty = borderSideProperty('bottom')
const borderLeftBorderProperty = borderSideProperty('left')

export const borderTopWidth = borderTopProperty('width')
export const borderTopStyle = borderTopProperty('style')
export const borderTopColor = borderTopProperty('color')

export const borderRightWidth = borderRightProperty('width')
export const borderRightStyle = borderRightProperty('style')
export const borderRightColor = borderRightProperty('color')

export const borderBottomWidth = borderBottomProperty('width')
export const borderBottomStyle = borderBottomProperty('style')
export const borderBottomColor = borderBottomProperty('color')

export const borderLeftWidth = borderLeftBorderProperty('width')
export const borderLeftStyle = borderLeftBorderProperty('style')
export const borderLeftColor = borderLeftBorderProperty('color')
