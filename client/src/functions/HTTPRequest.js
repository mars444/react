import {delay} from "./requestFrom";

const PORT = 3000
const serverURL = `http://localhost:${PORT}`

export const HTTPRequest = async (method, urlEnd, data, timeOut) => {

    const URL = `${serverURL}${urlEnd}`

    await delay(timeOut)

    if(method === 'Get') {
        const response = await fetch(URL, {
            method: method,
            mode: 'cors', // no-cors, *cors, same-origin
        });

        return response.json(); // parses JSON response into native JavaScript objects


    } else if (method === 'POST') {
        const response = await fetch(URL, {
            method: method,
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
                //'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header

        });

        return response.json(); // parses JSON response into native JavaScript objects
    }


}