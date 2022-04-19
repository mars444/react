import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "primereact/button";

const GoHomeBtn = () => {
    return (
            <div className="home_btn">
                <Link to="/">
                    <Button className=''
                            type="button" label="" icon='pi pi-home'/>
                </Link>
            </div>

    );
};

export default GoHomeBtn;