
import React, {useState, useEffect, useRef} from 'react';
import {getData} from "../../../functions/getSend";

import {
    useParams, Route, Switch
} from "react-router-dom"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory, useLocation } from "react-router";
import GoBackBtn from "../../buttons/GoBack";
import SideBar from "../../SideBar";
import {useDispatch, useSelector} from "react-redux";
import {saveMarkStateAction} from "../../../../store/markReducer";
import store from "../../../../store/store";







const PageMarksWithPanel =  () => {


    const dispatch = useDispatch()
    const markState = useSelector( state => state.markStateRoot.markState)


    const overlayPanel = useRef(null);
    // const [dictData, setData] = useState([])
    const [load, setLoad] = useState(false)

    let { id, model } = useParams();
    const key = `marka_id_${id}`


    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const  URL = `http://localhost:3002/dict/${id}`

        getData(URL,1500)
            .then((data) => {
                console.log(data)
                // setData(data)
                // // dispatch({type:'saveMarkState', value: data})

                dispatch(saveMarkStateAction(markState.set(key, data)))

                console.log('state Mark  ', store.getState())
            })
            .then(() => setLoad(false))

    }, []);




    const getModelDescription = (e) => {

        history.push(`/dict/${id}/${e.data.model}`);


    }






    return (
        <div>

             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <div className='pb-3'>Models: {id}</div>
                 <DataTable loading={load} onRowClick={getModelDescription} title='Models' value={markState.get(key)}   showGridlines responsiveLayout="scroll">
                     <Column field="id"  header="ID"></Column>

                     <Column field="model"  header="Model"></Column>
                 </DataTable>

             </div>

                <Switch>
                    <Route path="/dict/:id/:model" component={SideBar}/>

                </Switch>


        </div>



    );
};

export default PageMarksWithPanel;