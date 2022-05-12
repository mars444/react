

const defaultState = {
    markState: new Map ()

}
const LOAD_MARK_STATE = 'loadMarkState'

export const markReducer = (state = defaultState, action) => {

    switch (action.type) {

        case LOAD_MARK_STATE:

            state.markState.set(action.key, action.value)

            const c = new Map (state.markState)

            const a = {...state, markState: c}

            return a

        default: return state
    }

}

export const loadMarkStateAction = (value, key) => ({type:LOAD_MARK_STATE, value, key})

