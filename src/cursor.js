function cursor(cursor) {
    return { cursor }
}

export const pointer = cursor('pointer')
export const wait = cursor('wait')
export const defaultCursor = cursor('cursor')