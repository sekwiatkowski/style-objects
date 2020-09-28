function position(position) {
    return {position}
}

export const absolute = position('absolute')

export const relative = position('relative')

function zero(side) {
    return {[side]: '0'}
}

export const top0 = zero('top')
export const right0 = zero('right')
export const bottom0 = zero('bottom')
export const left0 = zero('left')