const mapForBrands = new Map ()

const defaultState = {
    markState: mapForBrands

}
const SAVE_MARK_STATE = 'saveMarkState'

export const markReducer = (state = defaultState, action) => {
    console.log('action', action.type)
    console.log('action.value', action.value)
    switch (action.type) {

        case SAVE_MARK_STATE: return {...state, markState: action.value}

        default:
            return state
    }

}

export const saveMarkStateAction = (value) => ({type:SAVE_MARK_STATE, value})