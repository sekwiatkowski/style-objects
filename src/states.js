import {merge} from 'compose-functions'

export function visited(...styles) {
    return {
        ':visited': merge(styles)
    }
}

export function hover(...styles) {
    return {
        ':hover': merge(styles)
    }
}

export function active(...styles) {
    return {
        ':hover': merge(styles)
    }
}