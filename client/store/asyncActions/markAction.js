import {HTTPRequest} from "../../src/functions/HTTPRequest";
import {loadMarkStateAction} from "../reducers/markReducer";
import {useSelector} from "react-redux";


export const getMarks = (URL, key) => {
    return (dispatch)  => {


        try {
            HTTPRequest('Get', URL, null, 1000)
                .then((data) => {

                    console.log( 'req_data marks  ', data)
                    dispatch(loadMarkStateAction(data, key))
                })
        }

        catch (e) {
            console.error(e)
        }

        finally {
        }

    }
}