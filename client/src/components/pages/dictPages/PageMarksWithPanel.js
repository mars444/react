
import React, {useState, useEffect, useRef} from 'react';
import {getData} from "../../../functions/getSend";

import {
    useParams,
} from "react-router-dom"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory } from "react-router";
import GoBackBtn from "../../buttons/GoBack";
import { Panel } from 'primereact/panel';
import {Button} from "primereact/button";
import { OverlayPanel } from 'primereact/overlaypanel';

const PageMarksWithPanel =  () => {

    const overlayPanel = useRef(null);
    const [dictData, setData] = useState([])
    const [load, setLoad] = useState(true)
    let { id } = useParams();
    // const location = useLocation();
    // const hist = useHistory();

    useEffect(() => {
        const  URL = `http://localhost:3001/dict/${id}`

        getData(URL)
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .then(() => setLoad(false))

    }, []);

    const getMark = (e) => {
        overlayPanel.current.toggle(e)
    }


    return (
        <div>
             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <div className='pb-3'>Models: {id}</div>
                 <DataTable loading={load} onRowClick={getMark} title='Models' value={dictData}   showGridlines responsiveLayout="scroll">
                     <Column field="id"  header="ID"></Column>

                     <Column field="model"  header="Model"></Column>
                 </DataTable>
                 <OverlayPanel  ref={overlayPanel} showCloseIcon id="overlay_panel" style={{width: '450px'}} className="overlaypanel-demo">
                     lalalala
                 </OverlayPanel>
             </div>

            <Button type="button" icon="pi pi-search" label={'tjitid'} onClick={(e) => overlayPanel.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />






        </div>



    );
};

export default PageMarksWithPanel;