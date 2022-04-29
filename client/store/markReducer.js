const defaultState = {
    markState: []
}
const saveMarkState = 'saveMarkState'

export const markReducer = (state = defaultState, action) => {
    console.log('actioan',action.type)
    switch (action.type) {

        case saveMarkState: return {...state, markState: action.value}

        default:
            return state
    }

}

export const saveMarkStateAction = (value) => ({type:saveMarkState, value})