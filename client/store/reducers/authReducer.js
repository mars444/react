const defaultState = {
    authFormState: []
}

const SAVE_AUTH_FORM_STATE = 'SAVE_AUTH_FORM_STATE'

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {

        case SAVE_AUTH_FORM_STATE:
            return {...state, dictState: action.value}

        default: return state
    }

}

export const auth = (value) => (
    {type:SAVE_AUTH_FORM_STATE, value}
)