import { createStore, combineReducers } from 'redux';
import {dictReducer} from "./dictReducer";
import {markReducer} from "./markReducer";


const rootReducer = combineReducers( {
    dictStateRoot: dictReducer,
    markStateRoot: markReducer
})


const store = createStore(rootReducer);

export default store;