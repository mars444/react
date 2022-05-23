import {HTTPRequest} from "../../src/functions/HTTPRequest";
import {loadMarkStateAction} from "../reducers/markReducer";
import {useSelector} from "react-redux";


export const getMarks = (URL, key) => {
    return async (dispatch)  => {


        try {
            const data = await HTTPRequest('Get', URL, null, 1500)
                    console.log( 'req_data marks  ', data)
                    dispatch(loadMarkStateAction(data, key))

        }

        catch (e) {
            console.log('lalala errror')
            console.error(e)
        }

        finally {

        }

    }
}