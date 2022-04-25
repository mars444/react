import {delay} from "./requestFrom";

export async function postData(url = '', data = {}) {
    await delay({})
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
            //'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}