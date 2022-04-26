import React from 'react';

import {
    useParams
} from "react-router-dom"

import { OverlayPanel } from 'primereact/overlaypanel';

const PageModel = () => {

    let { part } = useParams();

    return (
        <div>
            <h3>ID: {part}</h3>
        </div>
    );
};

export default PageModel;