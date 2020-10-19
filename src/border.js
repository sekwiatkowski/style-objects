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