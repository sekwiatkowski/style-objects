import {capitalize, joinWithSpace} from 'standard-functions'

function createBorder(property) {
    return (width, style, color) => ({ [property]: joinWithSpace(width, style, color) })
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

export function sideBorderProperty(side) {
    return property => value => {
        const key = 'border' + capitalize(side) + capitalize(property)

        return ({[key]: value})
    }
}

const borderTopProperty = sideBorderProperty('top')
export const borderTopWidth = borderTopProperty('width')
export const borderTopStyle = borderTopProperty('style')
export const borderTopColor = borderTopProperty('color')
export const noTopBorder = borderTopWidth('0')

const borderRightProperty = sideBorderProperty('right')
export const borderRightWidth = borderRightProperty('width')
export const borderRightStyle = borderRightProperty('style')
export const borderRightColor = borderRightProperty('color')
export const noRightBorder = borderRightWidth('0')

const borderBottomProperty = sideBorderProperty('bottom')
export const borderBottomWidth = borderBottomProperty('width')
export const borderBottomStyle = borderBottomProperty('style')
export const borderBottomColor = borderBottomProperty('color')
export const noBottomBorder = borderBottomWidth('0')

const borderLeftProperty = sideBorderProperty('left')
export const borderLeftWidth = borderLeftProperty('width')
export const borderLeftStyle = borderLeftProperty('style')
export const borderLeftColor = borderLeftProperty('color')
export const noLeftBorder = borderLeftWidth('0')
