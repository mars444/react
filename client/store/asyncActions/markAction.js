import {HTTPRequest} from "../../src/functions/HTTPRequest";
import {loadMarkStateAction} from "../reducers/markReducer";


export const getMarks = (URL, markState, key) => {
    return dispatch  => {
          HTTPRequest('Get', URL, null, 1500)
            .then((data) => {
                console.log( 'req_data marks   ', data)

                const newMarkState = markState.set(key, data)

                console.log( 'markStateNEW   ', markState)

                dispatch(loadMarkStateAction(newMarkState))
            })
    }
}