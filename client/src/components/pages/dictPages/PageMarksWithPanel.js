
import React, {useState, useEffect, useRef} from 'react';

import {
    useParams, Route, Switch
} from "react-router-dom"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory, useLocation } from "react-router";
import GoBackBtn from "../../buttons/GoBack";
import SideBar from "../../SideBar";
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../../../store/asyncActions/markAction";



const PageMarksWithPanel =  () => {


    const dispatch = useDispatch()
    const markState = useSelector( state => state.markStateRoot.markState)

    console.log('render MarkState', markState)



    const [load, setLoad] = useState(false)

    let { id } = useParams();
    const key = `marka_id_${id}`

    const location = useLocation();
    const history = useHistory();


    useEffect(() => {

        dispatch(getMarks(location.pathname, key))

    }, []);




    const getModelDescription = (e) => {

        history.push(`/dict/${id}/${e.data.model}`);


    }

    return (

        <div>

             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <div className='pb-3'>Models: {id}</div>
                 <DataTable loading={load} onRowClick={getModelDescription} title='Models' value={markState.get('1')}   showGridlines responsiveLayout="scroll">
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