
import React, {useState, useEffect, useRef, useMemo} from 'react';

import {
    useParams, Route, Switch
} from "react-router-dom"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory, useLocation } from "react-router";
import GoBackBtn from "../../components/buttons/GoBack";
import SideBar from "../../components/SideBar";
import {useDispatch, useSelector} from "react-redux";
import {getMarks} from "../../../store/asyncActions/markAction";
import {getDict} from "../../../store/asyncActions/dictAction";



const PageMarksWithPanel =  () => {
    let { id } = useParams();
    const key = `marka_id_${id}`
    const dispatch = useDispatch()
    const markState = useSelector( state => state.markStateRoot.get('markState'))

    // const result = useMemo(() => markState?.get(key), [markState, key]);

    const result = markState?.get(key)

    // console.log('result', result)
    //
    // console.log('render Mark    State', markState)
    //



    // console.log("Длинаqqqqqqqqqqqqqqqqqqq", markState.get(key))

    const [load, setLoad] = useState(markState.get(key) ? !markState.get(key) : true)

        console.log('loasd1111111111111111111111111111111')



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

        <div className='test surface-50 test_2'>

             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <div className='pb-3'>Models: {id}</div>
                 <DataTable loading={load} onRowClick={getModelDescription} title='Models' value={result}   showGridlines responsiveLayout="scroll">
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