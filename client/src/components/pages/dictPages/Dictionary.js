import React, {useState, useEffect} from 'react';
import {getData} from "../../../functions/getSend";

import {
    HashRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch
} from "react-router-dom"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from "primereact/button";
import Brand from "./Brand";
import {InputText} from "primereact/inputtext";

import { Panel } from 'primereact/panel';

const Dictionary =  () => {

    let { path, url } = useRouteMatch();

    const [dictData, setData] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const  URL = 'http://localhost:3000/dict'

        getData(URL)
            .then((data) => {
                setData(data)
            })
            .then(() => setLoad(false))

    }, []);


    const [products, setProducts] = useState(null);



    return (
        <div>
            <div  className="flex flex-column align-items-center p-4 bg-white border-round m-2 relative_block">
                <DataTable loading={load} onRowClick={(e) => console.log(e.data.title)} title='Brands' value={dictData}   showGridlines responsiveLayout="scroll">
                    <Column field="id"  header="ID"></Column>
                    <Column field="title"  header="Brands"></Column>

                </DataTable>

            </div>
        </div>
    );
};

export default Dictionary;