const defaultState = {
    dictState: []
}

const LOAD_DICT_FROM_REQ = 'loadDictStateFromRequest'

export const dictReducer = (state = defaultState, action) => {
    switch (action.type) {

        case LOAD_DICT_FROM_REQ:
            console.log(action.value)
            return {...state, dictState: action.value}

        default: return state
    }

}

export const loadDictStateFromRequestAction = (value) => (
     {type:LOAD_DICT_FROM_REQ, value}
)