import React, {useState} from 'react';
import {Button} from "primereact/button";
import { Toolbar } from 'primereact/toolbar';
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Link} from "react-router-dom";
import {HTTPRequest} from "../functions/HTTPRequest";
import {loadDictStateFromRequestAction} from "../../store/reducers/dictReducer";
import {useEffect} from "react";
import {getDict} from "../../store/asyncActions/dictAction";

const TableAdaptivePage = () => {

    const [dataTable, setDataTable] = useState([])
    const [loadTable, setLoadTable] = useState(true)


    useEffect( () => {

        async function fetchData() {
            // You can await here
            const data = await HTTPRequest('Get', '/table_adaptive', '', 1000)
            setDataTable(data)
            setLoadTable(false)
        }

        try {

            fetchData()

        }

        catch(err){
            console.error(err)
        }

        finally {

        }

    }, []);



    const imageBodyTemplate = (rowData) => {

        return (
            <div className='flex align-items-center justify-content-between flex-grow-1 border-1 bg-blue-50 border-round'>
                <img src={require(`../static/${rowData.image}`).default} width={300}    />
                <h1 className='flex flex-column p-5 justify-content-center align-items-center'>
                    {rowData.marka}  title
                </h1>
                <div className='flex flex-column p-5 justify-content-center align-items-center'>
                    <h3>{rowData.image}</h3>
                    <p className={'p-3'}>description</p>
                </div>
            </div>

            )

    }


    return (
            <div className='container head_adaptive_table'>
                <header className='flex justify-content-between align-items-center bg-white mb-3 border-round p-5'>
                    <div className="logo">Logo</div>
                    <h1 className="header__title">
                        Title
                    </h1>
                    <div className="logout">
                        <Link to="/">
                            <Button className=''
                                    type="button" label="" icon='pi pi-home'/>
                        </Link>
                    </div>
                </header>


                    <div className="some_block flex align-items-center justify-content-between bg-white mb-3 border-round p-5">
                        <div className="left">
                            leftItems
                        </div>
                        <div className="right">
                            rightItems
                        </div>
                    </div>
                <div className={'flex-grow-1 flex flex-column justify-content-between overflow-hidden border-1'}>
                <DataTable  paginator
                            stripedRows
                            value={dataTable}
                            responsiveLayout="stack"
                            className=''
                            scrollable
                            scrollHeight='flex'
                            loading={loadTable}
                            rows={7} rowsPerPageOptions={[7,14,100]}
                         >
                    <Column field="id" sortable  header="ID" style={{maxWidth: '50px', justifyContent: 'center'}}></Column>
                    <Column header="Image" body={imageBodyTemplate}  style={{justifyContent: 'center' }}></Column>
                    <Column field="marka"  header="Brand" style={{ maxWidth: '100px', justifyContent: 'center' }}></Column>
                </DataTable>
                </div>


                <footer>
                    <h1
                        className="footer flex justify-content-center bg-white mt-3 border-round p-5"
                        style={{ height: '100px'}}
                    >
                        Footer
                    </h1>
                </footer>




        </div>
    );
};

export default TableAdaptivePage;