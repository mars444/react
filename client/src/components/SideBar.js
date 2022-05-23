import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import {useEffect, useState} from "react";
import {getData} from "../functions/getSend";
import {useHistory, useParams} from "react-router-dom";
import {HTTPRequest} from "../functions/HTTPRequest";


const SideBarContent = ({description}) => {

    const keysDesc = Object.keys(description.description)

    console.log('keysDesc', keysDesc)

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



const SideBar = (sidebarHide) => {

    const history = useHistory()
    const sidebarHideq = () => {
        setVisibleLeft(false)
        sidebarHide()
    }

    console.log(" Render SideBar")

    const [visibleLeft, setVisibleLeft] = useState(true);
    const [sidebarContent, setSidebarContent] = useState('');
    let { id, model } = useParams();


    useEffect(() => {

            HTTPRequest('Get', `/dict/${id}/${model}`, '', 0 )
            .then((data) => {
                console.log('data SIDEBAR', data)
                setSidebarContent(data)
            })

    }, [model]);

            return (

                <Sidebar  visible={visibleLeft} onHide={()=>history.goBack()}>

                    {sidebarContent && <SideBarContent description={sidebarContent} />}

                </Sidebar>
            );


};

export default SideBar;