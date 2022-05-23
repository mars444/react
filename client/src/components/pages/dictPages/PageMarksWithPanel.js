
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
import {getDict} from "../../../../store/asyncActions/dictAction";



const PageMarksWithPanel =  () => {
    let { id } = useParams();
    const key = `marka_id_${id}`
    const dispatch = useDispatch()
    const markState = useSelector( state => state.markStateRoot.get('markState'))

    console.log('render MarkState', markState)




    console.log("Длинаqqqqqqqqqqqqqqqqqqq", markState.get(key))

    const [load, setLoad] = useState(markState.get(key) ? !markState.get(key) : true)

        console.log('loasd', load)



    const location = useLocation();
    const history = useHistory();


    useEffect(() => {

        dispatch(getMarks(`/dict/${id}`, key))
            .then( () => {
                setLoad(false)
            })

    }, []);




    const getModelDescription = (e) => {

        history.push(`/dict/${id}/${e.data.model}`);


    }

    return (

        <div>

             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <div className='pb-3'>Models: {id}</div>
                 <DataTable loading={load} onRowClick={getModelDescription} title='Models' value={markState.get(key)?.toJS()}   showGridlines responsiveLayout="scroll">
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