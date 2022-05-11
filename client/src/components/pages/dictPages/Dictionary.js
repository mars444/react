import React, {useState, useEffect} from 'react';

import {HTTPRequest} from "../../../functions/HTTPRequest";

import {
    Route,
    useParams
} from "react-router-dom"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory, useLocation } from "react-router";
import GoBackBtn from "../../buttons/GoBack";
import {useDispatch, useSelector} from "react-redux";
import {saveDictStateAction} from "../../../../store/reducers/dictReducer";
import store from "../../../../store/store";

import {getDict} from "../../../../store/asyncActions/dictAction";

const Dictionary =  () => {


    const dispatch = useDispatch()
    const dictState = useSelector( state => state.dictStateRoot.dictState)

    console.log('render dictState', dictState)

    // console.log('redux_data   ', dictState)

    let history = useHistory();
    const location = useLocation();
    // const [dictData, setData] = useState(dictState)
    const [load, setLoad] = useState(false)


    // const hist = useHistory();

    useEffect(() => {

        dispatch(getDict())

    }, []);




    const pushUrl = (e) => {
        history.push(`${location.pathname}/${e.data.id}`);
    }





    return (
        <div>
             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <DataTable loading={load} onRowClick={pushUrl} title='Brands' value={dictState}   showGridlines responsiveLayout="scroll">
                     <Column field="id"  header="ID"></Column>
                     <Column field="marka"  header="Brands"></Column>
                 </DataTable>
             </div>

        </div>



    );
};

export default Dictionary;