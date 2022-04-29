
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

    console.log(store.getState())
    const dispatch = useDispatch()
    const markState = useSelector( state => state.markStateRoot.markState)


    const overlayPanel = useRef(null);
    // const [dictData, setData] = useState([])
    const [load, setLoad] = useState(true )

    let { id, model } = useParams();

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const  URL = `http://localhost:3001/dict/${id}`

        getData(URL,500)
            .then((data) => {
                console.log(data)
                // setData(data)
                // // dispatch({type:'saveMarkState', value: data})
                 dispatch(saveMarkStateAction(data))
            })
            .then(() => setLoad(false))

    }, []);




    const getModelDescription = (e) => {

        history.push(`/dict/${id}/${e.data.model}`);


    }



    const sidebarHide = () => {

        history.push(`/dict/${id}`);

    }




    return (
        <div>

             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <div className='pb-3'>Models: {id}</div>
                 <DataTable loading={load} onRowClick={getModelDescription} title='Models' value={markState}   showGridlines responsiveLayout="scroll">
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