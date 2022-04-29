const defaultState = {
    dictState: []
}

const saveDictState = 'saveDictState'

export const dictReducer = (state, action) => {
    switch (action.type) {
        case saveDictState: return {...state, dictState: action.value}

        default:
            return defaultState
    }

}

export const saveDictStateAction = (value) => ({type:saveDictState, value})
