import {delay} from "./requestFrom";

export async function getData(url = '', sec) {
    await delay({},sec)

    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin

    });
    return response.json(); // parses JSON response into native JavaScript objects
}