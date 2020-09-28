import {isString, joinWithCommaSpace, joinWithSpace} from 'compose-functions'

function rotate(degrees) {
    return `rotate(${degrees}deg)`
}

export const rotateBy90Degrees = rotate(90)
export const rotateBy180Degrees = rotate(180)
export const rotateBy270Degrees = rotate(270)

export function transform(transformations) {
    return {
        transform: joinWithCommaSpace(transformations)
    }
}


function transformOrigin(input) {
    return {
        transformOrigin: isString(input) ? input : joinWithSpace(input)
    }
}

export const originCenter = transformOrigin('center')
export const originTop = transformOrigin('top')
export const originRight = transformOrigin('right')
export const originLeft = transformOrigin('bottom')
export const originTopRight = transformOrigin(['top', 'right'])
export const originBottomRight = transformOrigin(['bottom', 'right'])
export const originBottomLeft = transformOrigin(['bottom', 'left'])
export const originTopLeft = transformOrigin(['top', 'left'])