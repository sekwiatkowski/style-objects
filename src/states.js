import {merge} from 'compose-functions'

function state(state) {
    return styles => {
        return {
            [':' + state]: styles.length === 1 ? styles[0] : merge(...styles)
        }
    }
}

export function visited(...styles) {
    return state ('visited') (styles)
}

export function hover(...styles) {
    return state ('hover') (styles)
}

export function active(...styles) {
    return state ('active') (styles)
}

export function focus(...styles) {
    return state ('active') (styles)
}