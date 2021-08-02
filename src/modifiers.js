import {isOfLengthOne, merge} from 'standard-functions'

function modifier(modifier) {
    return styles => {
        return {
            [':' + modifier]: isOfLengthOne(styles) ? styles[0] : merge(...styles)
        }
    }
}

export const visited = modifier ('visited')

export const hover = modifier('hover')

export const active = modifier('active')

export const focus = modifier('focus')

export const focusVisible = modifier('focusVisible')

export const before = modifier('before')

export const after = modifier('after')

export const disabled = modifier('disabled')