const defaultState = {
    markState: []
}
const saveMarkState = 'saveMarkState'

export const markReducer = (state, action) => {
    switch (action.type) {
        case saveMarkState: return {...state, markState: action.value}

        default:
            return defaultState
    }

}

export const saveMarkStateAction = (value) => ({type:saveMarkState, value})