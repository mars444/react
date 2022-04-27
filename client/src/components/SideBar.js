import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import {useEffect, useState} from "react";
import {getData} from "../functions/getSend";


const SideBarContent = ({description}) => {

    const keysDesc = Object.keys(description.description)

    console.log(keysDesc)

    return (
        <div>
            <h1>{description.marka}</h1>
            <h3 className='mb-4'>{description.model}</h3>
            {
                keysDesc.map((item, index) => (

                    <div key={index} className="grid">
                        <div className="col-4 border-right-2">{item}</div>
                        <div className="col">{description.description[item]}</div>
                    </div>
                ))
            }
        </div>
    );
};

const SideBar = ({id, model}) => {

    const [visibleLeft, setVisibleLeft] = useState(false);
    const [sidebarContent, setSidebarContent] = useState('');


    useEffect(() => {

        const  URL = `http://localhost:3000/dict/${id}/${model}`
        getData(URL,50)
            .then((data) => {
                setSidebarContent(data)
            })
            .then(() => {
                setVisibleLeft(true)
            })

    }, []);

            return (

                <Sidebar  visible={visibleLeft} onHide={() => setVisibleLeft(false)}>

                    <SideBarContent description={sidebarContent} />

                </Sidebar>
            );



};

export default SideBar;