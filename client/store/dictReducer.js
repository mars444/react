const defaultState = {
    dictState: []
}

const saveDictState = 'saveDictState'

export const dictReducer = (state = defaultState, action) => {
    switch (action.type) {
        case saveDictState: return {...state, dictState: action.value}

        default:
            return state
    }

}

export const saveDictStateAction = (value) => ({type:saveDictState, value})
