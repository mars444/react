
import React, {useState, useEffect} from 'react';
import {getData} from "../../../functions/getSend";

import {
    useParams
} from "react-router-dom"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory } from "react-router";
import GoBackBtn from "../../buttons/GoBack";
import { Panel } from 'primereact/panel';

const PageMarksWithPanel =  () => {


    const [dictData, setData] = useState([])
    const [load, setLoad] = useState(true)
    let { id } = useParams();
    // const location = useLocation();
    // const hist = useHistory();

    useEffect(() => {
        const  URL = `http://localhost:3000/dict/${id}`

        getData(URL)
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .then(() => setLoad(false))

    }, []);

    const getMark = (e) => {
        console.log(e.data)

    }


    return (
        <div>
             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <div className='pb-3'>Models: {id}</div>
                 <DataTable loading={load} onRowClick={getMark} title='Models' value={dictData}   showGridlines responsiveLayout="scroll">
                     <Column field="id"  header="ID">
                         <Panel header="1" toggleable></Panel>
                     </Column>
                     <Column field="model"  header="Model"></Column>
                 </DataTable>
             </div>







        </div>



    );
};

export default PageMarksWithPanel;