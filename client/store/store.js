import { createStore } from 'redux';

const defaultState = {
    dictState: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'saveDictState': return {...state, dictState: action.value}

        default:
            return defaultState
    }

}

const store = createStore(reducer);

export default store;