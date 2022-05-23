

const defaultState = {
    regState:       {tags:[1,2,3]}
}

// Actions
const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE'

// Reducer
export const regReducer = (state =  defaultState, action = {}) => {

    switch (action.type) {

        case UPDATE_FORM_STATE:
            const a = {
                regState: action.value
            }
            return a

        default:
            console.log('state ', state)
            return state
    }
}


export const regAction = (value) => (
    {type:UPDATE_FORM_STATE, value}
)
