import {fromJS, Map} from "immutable";


// const defaultState = {
//     markState: new Map ()
//
// }

const defaultState = fromJS({
    markState: {},
    number: 66,
    lab_1: 1,
    lab_2: 2,
    lab_3: 3,
    lab_4: 4,
    lab_5: 5,
    lab_6: 6,
    lab_7: 7,
    lab_8: 8,

})
const LOAD_MARK_STATE = 'loadMarkState'

export const markReducer = (state = defaultState, action) => {

    switch (action.type) {

        case LOAD_MARK_STATE:

            console.log('qqqqqqqqqqqq',action.key, action.value)

            // const newMap = Map([action.key, action.value])

            const newState  = state.set('markState', fromJS({[action.key] : action.value}))

            console.log('defaultState LIST', state.get('dictState'))
            console.log('newState LIST', newState.get('dictState'))

            console.log('NEWSTATE', newState)

            return newState


        default: return state
    }

}

export const loadMarkStateAction = (value, key) => ({type:LOAD_MARK_STATE, value, key})

