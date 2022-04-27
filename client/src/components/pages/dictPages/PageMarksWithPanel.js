
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


const PageMarksWithPanel =  () => {

    const overlayPanel = useRef(null);
    const [dictData, setData] = useState([])
    const [load, setLoad] = useState(true)
    const [hide, setHide] = useState(false);
    const [sidebarContent, setSidebarContent] = useState('');
    let { id, model } = useParams();

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const  URL = `http://localhost:3000/dict/${id}`

        getData(URL,500)
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .then(() => setLoad(false))

    }, []);




    const getModelDescription = (e) => {


        history.push(`/dict/${id}/${e.data.model}`);
        const  URL = `http://localhost:3000/dict/${id}/${e.data.model}`
        getData(URL,50)
            .then((data) => {
                setSidebarContent(data)
            })
            .then(() => {
                setHide(true)
            })


    }
    //
    // const SideBarContent = ({description}) => {
    //
    //     const keysDesc = Object.keys(description.description)
    //
    //     console.log(keysDesc)
    //
    //     return (
    //         <div>
    //             <h1>{description.marka}</h1>
    //             <h3 className='mb-4'>{description.model}</h3>
    //             {
    //                 keysDesc.map((item, index) => (
    //
    //                 <div key={index} className="grid">
    //                 <div className="col-4 border-right-2">{item}</div>
    //                 <div className="col">{description.description[item]}</div>
    //                 </div>
    //                 ))
    //             }
    //         </div>
    //     );
    // };
    //
    //
    // const SideBar = () => {
    //
    //     return (
    //
    //         <Sidebar  visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
    //
    //             <SideBarContent description={sidebarContent} />
    //
    //         </Sidebar>
    //     );
    // };



    const sidebarHide = () => {

        history.push(`/dict/${id}`);

    }




    return (
        <div>


             <div className="flex flex-column align-items-center p-7 bg-white border-round m-2 relative_block">
                 <GoBackBtn/>
                 <div className='pb-3'>Models: {id}</div>
                 <DataTable loading={load} onRowClick={getModelDescription} title='Models' value={dictData}   showGridlines responsiveLayout="scroll">
                     <Column field="id"  header="ID"></Column>

                     <Column field="model"  header="Model"></Column>
                 </DataTable>

             </div>

                <Switch>
                    <Route path="/dict/:id/:model" component={() => SideBar(sidebarHide)}/>

                </Switch>






        </div>



    );
};

export default PageMarksWithPanel;