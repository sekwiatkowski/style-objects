import {capitalize, joinWithSpace} from 'standard-functions'

function createBorder(property) {
    return width => style => color => ({ [property]: joinWithSpace(width, style, color) })
}

export const border = createBorder('border')

export const borderTop = createBorder('borderTop')
export const borderRight = createBorder('borderRight')
export const borderBottom = createBorder('borderBottom')
export const borderLeft = createBorder('borderLeft')

export const noBorder = {border: '0'}

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

const borderRightProperty = sideBorderProperty('right')
export const borderRightWidth = borderRightProperty('width')
export const borderRightStyle = borderRightProperty('style')
export const borderRightColor = borderRightProperty('color')

const borderBottomProperty = sideBorderProperty('bottom')
export const borderBottomWidth = borderBottomProperty('width')
export const borderBottomStyle = borderBottomProperty('style')
export const borderBottomColor = borderBottomProperty('color')

const borderLeftProperty = sideBorderProperty('left')
export const borderLeftWidth = borderLeftProperty('width')
export const borderLeftStyle = borderLeftProperty('style')
export const borderLeftColor = borderLeftProperty('color')

function noSideBorder(side) {
    // The use of "border-[side]: none" caused issues on page changes.
    return sideBorderProperty(side) ('width') ('0')
}

export const noTopBorder = noSideBorder('top')
export const noRightBorder = noSideBorder('right')
export const noBottomBorder = noSideBorder('bottom')
export const noLeftBorder = noSideBorder('left')