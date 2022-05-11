
const defaultState = {
    markState: new Map ()

}
const LOAD_MARK_STATE = 'loadMarkState'

export const markReducer = (state = defaultState, action) => {

    switch (action.type) {

        case LOAD_MARK_STATE:

            console.log('ahaahah', action.value)

            const b = new Map ()
            b.set('1', action.value)
            const a = {...state, markState: b}
            return a

        default: return state
    }

}

export const loadMarkStateAction = (value) => ({type:LOAD_MARK_STATE, value})

