export function calc(calculation) {
    return `calc(${calculation})`
}

export function add(a) {
    return b => `${a} + ${b}`
}

export function subtract(a) {
    return b => `${a} - ${b}`
}