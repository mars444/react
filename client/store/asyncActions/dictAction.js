import {HTTPRequest} from "../../src/functions/HTTPRequest";
import {loadDictStateFromRequestAction} from "../reducers/dictReducer";
import {postData} from "../../src/functions/postSend";


export const getDict =  () => {
    return async dispatch  => {

        try {
           const data = await HTTPRequest('Get', '/dict', '', 1000)

                    console.log( 'req_data   ', data)

                    dispatch(loadDictStateFromRequestAction(data))

        }

        catch(err){
            console.error(err)
        }

        finally {

        }



    }
}