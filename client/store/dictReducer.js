const defaultState = {
    dictState: []
}

export const dictReducer = (state, action) => {
    switch (action.type) {
        case 'saveDictState': return {...state, dictState: action.value}

        default:
            return defaultState
    }

}
