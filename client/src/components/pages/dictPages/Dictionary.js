import React, {useState, useEffect} from 'react';
import {getData} from "../../../functions/getSend";

import {
    useParams
} from "react-router-dom"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory, useLocation } from "react-router";
import GoBackBtn from "../../buttons/GoBack";


const Dictionary =  () => {

    let history = useHistory();
    let { id } = useParams();
    const location = useLocation();
    const [dictData, setData] = useState([])
    const [load, setLoad] = useState(true)


    console.log('location   ', location)
    // const hist = useHistory();

    useEffect(() => {
        const  URL = 'http://localhost:3001/dict'

        getData(URL)
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .then(() => setLoad(false))

    }, []);


    const pushUrl = (item) => {
        history.push(`${location.pathname}/${item}`);
    }

    const getMark = (e) => {
        pushUrl(e.data.marka)
    }





    return (
        <div>
             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <DataTable loading={load} onRowClick={getMark} title='Brands' value={dictData}   showGridlines responsiveLayout="scroll">
                     <Column field="id"  header="ID"></Column>
                     <Column field="marka"  header="Brands"></Column>
                 </DataTable>
             </div>


        </div>



    );
};

export default Dictionary;