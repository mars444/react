import {useEffect, useState} from "react";
import {HTTPRequest} from "../functions/HTTPRequest";

export const myHook = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {

        HTTPRequest('Get', '/hook', '', 1000)

            .then((data) => {
                console.log( 'req_data   ', data)
                setProducts(data)
            })

    }, []);
    return [products, setProducts]
}