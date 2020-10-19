import {capitalize, joinWithSpace, keyValue} from 'compose-functions'

function createBorder(property) {
    return (width, style, color) => keyValue(property) (joinWithSpace([width, style, color]))
}

export const border = createBorder('border')

export const borderTop = createBorder('borderTop')
export const borderRight = createBorder('borderRight')
export const borderBottom = createBorder('borderBottom')
export const borderLeft = createBorder('borderLeft')

export function borderSideProperty(side) {
    return property => value => {
        const key = 'border' + capitalize(side) + capitalize(property)

        return ({[key]: value})
    }
}

const topBorderProperty = borderSideProperty('top')
const rightBorderProperty = borderSideProperty('right')
const bottomBorderProperty = borderSideProperty('bottom')
const leftBorderProperty = borderSideProperty('left')

export const topBorderWidth = topBorderProperty('width')
export const topBorderStyle = topBorderProperty('style')
export const topBorderColor = topBorderProperty('color')

export const rightBorderWidth = rightBorderProperty('width')
export const rightBorderStyle = rightBorderProperty('style')
export const rightBorderColor = rightBorderProperty('color')

export const bottomBorderWidth = bottomBorderProperty('width')
export const bottomBorderStyle = bottomBorderProperty('style')
export const bottomBorderColor = bottomBorderProperty('color')

export const leftBorderWidth = leftBorderProperty('width')
export const leftBorderStyle = leftBorderProperty('style')
export const leftBorderColor = leftBorderProperty('color')
