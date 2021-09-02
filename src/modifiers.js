import {isSingle, merge} from 'standard-functions'

function modifier(modifier) {
    return (...styles) => ({
        [':' + modifier]: isSingle(styles) ? styles[0] : merge(...styles)
    })
}

export const visited = modifier ('visited')

export const hover = modifier('hover')

export const active = modifier('active')

export const focus = modifier('focus')

export const focusVisible = modifier('focus-visible')

export const before = modifier('before')

export const after = modifier('after')

export const disabled = modifier('disabled')