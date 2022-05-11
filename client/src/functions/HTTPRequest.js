import {delay} from "./requestFrom";

const PORT = 3002
const serverURL = `http://localhost:${PORT}`

export const HTTPRequest = async (method, urlEnd, data, timeOut) => {

    const URL = `${serverURL}${urlEnd}`

    await delay(timeOut)

    const response = await fetch(URL, {
        method: method,
        mode: 'cors', // no-cors, *cors, same-origin

    });
    return response.json(); // parses JSON response into native JavaScript objects

}