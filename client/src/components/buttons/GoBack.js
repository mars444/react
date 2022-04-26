import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "primereact/button";
import { useHistory } from "react-router";

const GoBackBtn = () => {
    const hist = useHistory();
    return (
        <div className="home_btn">
                <Button onClick={() => hist.goBack()}
                        type="button" label="" icon='pi pi-angle-double-left'/>
        </div>

    );
};

export default GoBackBtn;