import Immutable, {fromJS, List} from "immutable";

const defaultState = fromJS({
    'dictState': List([{id: 1, marka: 'BMV'}]),
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


const LOAD_DICT_FROM_REQ = 'loadDictStateFromRequest'

export const dictReducer = (state = defaultState, action) => {
    switch (action.type) {

        case LOAD_DICT_FROM_REQ:
            const newState  = state.set('dictState', action.value)

            console.log('defaultState LIST', state.get('dictState'))
            console.log('newState LIST', newState.get('dictState'))

            console.log('NEWSTATE', newState)

            return newState

        default: return state
    }

}

export const loadDictStateFromRequestAction = (value) => (
     {type:LOAD_DICT_FROM_REQ, value}
)
