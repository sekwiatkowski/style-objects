function alignItems(alignItems) {
    return { alignItems }
}

export const alignItemsCenter = alignItems('center')
export const alignItemsFlexStart = alignItems('flex-start')
export const alignItemsFlexEnd = alignItems('flex-end')

function alignSelf(alignSelf) {
    return { alignSelf }
}

export const alignSelfCenter = alignSelf('center')
export const alignSelfFlexStart = alignSelf('flex-start')
export const alignSelfFlexEnd = alignSelf('flex-end')

function justifyContent(justifyContent) {
    return { justifyContent }
}

export const justifyContentCenter = justifyContent('center')
export const justifyContentSpaceBetween = justifyContent('space-between')
export const justifyContentFlexStart = justifyContent('flex-start')
export const justifyContentFlexEnd = justifyContent('flex-end')

function justifySelf(justifySelf) {
    return { justifySelf }
}

export const justifySelfCenter = justifySelf('center')
export const justifySelfFlexStart = justifySelf('flex-start')
export const justifySelfFlexEnd = justifySelf('flex-end')

function textAlign(textAlign) {
    return { textAlign }
}

export const centerText = textAlign('center')

export const justifyText = textAlign('justify')