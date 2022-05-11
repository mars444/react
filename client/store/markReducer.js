const mapForBrands = new Map ()

const defaultState = {
    markState: mapForBrands

}
const saveMarkState = 'saveMarkState'

export const markReducer = (state = defaultState, action) => {
    console.log('actioan',action.type)
    console.log('action.value',action.value)
    switch (action.type) {

        case saveMarkState: return {...state, markState: action.value}

        default:
            return state
    }

}

export const saveMarkStateAction = (value) => ({type:saveMarkState, value})