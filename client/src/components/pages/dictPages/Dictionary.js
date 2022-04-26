import React, {useState, useEffect} from 'react';
import {getData} from "../../../functions/getSend";

import {
useRouteMatch
} from "react-router-dom"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Dictionary =  () => {

    const [dictData, setData] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const  URL = 'http://localhost:3000/dict'

        getData(URL)
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .then(() => setLoad(false))

    }, []);

    const getMark = (e) => {
        console.log(e.data.marka)
    }





    return (
        <div>
            <div  className="flex flex-column align-items-center p-4 bg-white border-round m-2 relative_block">
                <DataTable loading={load} onRowClick={getMark} title='Brands' value={dictData}   showGridlines responsiveLayout="scroll">
                    <Column field="id"  header="ID"></Column>
                    <Column field="marka"  header="Brands"></Column>

                </DataTable>

            </div>
        </div>
    );
};

export default Dictionary;