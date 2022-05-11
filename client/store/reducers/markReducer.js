
const defaultState = {
    markState: new Map ()

}
const LOAD_MARK_STATE = 'loadMarkState'

export const markReducer = (state = defaultState, action) => {

    switch (action.type) {

        case LOAD_MARK_STATE: return {...state, markState: action.value}

        default:
            return state
    }

}

export const loadMarkStateAction = (value) => ({type:LOAD_MARK_STATE, value})

