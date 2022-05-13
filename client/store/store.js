import {createStore, combineReducers, applyMiddleware} from 'redux';
import {dictReducer} from "./reducers/dictReducer";
import {markReducer} from "./reducers/markReducer";
import {regReducer} from "./reducers/regReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers( {
    dictStateRoot: dictReducer,
    markStateRoot: markReducer,
    regStateRoot: regReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;