export function rems(units) {
    return units.toString() + 'rem'
}

export function quarterRem(name) {
    return units => ({ [name]: rems(units * 0.25) })
}