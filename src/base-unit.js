export function quarters(units) {
    return units * 0.25
}

export function baseUnitStyle(applyUnits) {
    return name => units => ({ [name]: applyUnits(units) })
}