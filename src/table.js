import {joinWithSpace} from 'standard-functions'

export function borderSpacing(horizontalLength, verticalLength) {
    return { borderSpacing: joinWithSpace(horizontalLength, verticalLength) }
}