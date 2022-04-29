const defaultState = {
    markState: []
}

export const markReducer = (state, action) => {
    switch (action.type) {
        case 'saveMarkStвate': return {...state, markState: action.value}

        default:
            return defaultState
    }

}