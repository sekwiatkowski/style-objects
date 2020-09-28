function alignItems(alignItems) {
    return { alignItems }
}

export const alignItemsCenter = alignItems('center')
export const alignItemsFlexEnd = alignItems('flex-end')

function alignSelf(alignSelf) {
    return { alignSelf }
}

export const alignSelfCenter = alignSelf('center')
export const alignSelfFlexEnd = alignSelf('flex-end')

function justifyContent(justifyContent) {
    return { justifyContent }
}

export const justifyContentCenter = justifyContent('center')
export const justifyContentFlexEnd = justifyContent('flex-end')

function justifySelf(justifySelf) {
    return { justifySelf }
}

export const justifySelfCenter = justifySelf('center')
export const justifySelfFlexEnd = justifySelf('flex-end')

export const center = {
    marginLeft: 'auto',
    marginRight: 'auto'
}