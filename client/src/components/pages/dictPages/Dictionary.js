import React, {useState, useEffect} from 'react';
import {getData} from "../../../functions/getSend";

import {
    Route,
    useParams
} from "react-router-dom"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory, useLocation } from "react-router";
import GoBackBtn from "../../buttons/GoBack";
import PageMarksWithPanel from "./PageMarksWithPanel";
import {useDispatch, useSelector} from "react-redux";


const Dictionary =  () => {

    const dispatch = useDispatch()
    const dictState = useSelector( state => state.dictStateRoot.dictState)

    console.log('redux_data   ', dictState)

    let history = useHistory();
    let { id } = useParams();
    const location = useLocation();
    const [dictData, setData] = useState(dictState)
    const [load, setLoad] = useState(false || !dictState.length)


    // const hist = useHistory();

    useEffect(() => {
        const  URL = 'http://localhost:3001/dict'

        getData(URL, 500)
            .then((data) => {
                console.log( 'req_data   ', data)
                setData(data)
                dispatch({type:'saveDictState', value: data})
            })
            .then(() => setLoad(false))


    }, []);




    const pushUrl = (e) => {
        history.push(`${location.pathname}/${e.data.id}`);
    }





    return (
        <div>
             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <DataTable loading={load} onRowClick={pushUrl} title='Brands' value={dictData}   showGridlines responsiveLayout="scroll">
                     <Column field="id"  header="ID"></Column>
                     <Column field="marka"  header="Brands"></Column>
                 </DataTable>
             </div>




        </div>



    );
};

export default Dictionary;