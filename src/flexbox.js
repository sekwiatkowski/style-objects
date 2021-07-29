export const flex1 = {
    flex: '1'
}

function flexDirection(flexDirection) {
    return {
        flexDirection
    }
}

export const flexRow = flexDirection('row')
export const flexColumn = flexDirection('column')

export const flexWrap = {
    flexWrap: 'wrap'
}