import {joinWithSpace} from 'compose-functions'

export function border(width, style, color) {
    return {
        border: joinWithSpace([width, style, color])
    }
}