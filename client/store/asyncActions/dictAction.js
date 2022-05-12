import {HTTPRequest} from "../../src/functions/HTTPRequest";
import {loadDictStateFromRequestAction} from "../reducers/dictReducer";
import {postData} from "../../src/functions/postSend";


export const getDict = () => {
    return dispatch  => {

        try {
            HTTPRequest('Get', '/dict', '', 1000)
                .then((data) => {

                    console.log( 'req_data   ', data)

                    dispatch(loadDictStateFromRequestAction(data))
                })
        }

        catch(err){
            console.error(err)
        }

        finally {

        }



    }
}