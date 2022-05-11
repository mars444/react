import {HTTPRequest} from "../../src/functions/HTTPRequest";
import {loadDictStateFromRequestAction} from "../reducers/dictReducer";


export const getDict = () => {
    return dispatch  => {
        HTTPRequest('Get', '/dict', '', 1000)
            .then((data) => {

                console.log( 'req_data   ', data)

                dispatch(loadDictStateFromRequestAction(data))
            })

    }
}