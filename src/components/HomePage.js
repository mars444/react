import React from 'react';

import {Button} from "primereact/button";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className= 'flex flex-column align-items-center p-4 bg-white border-round 30px'>
        <div className= 'text-4xl pb-10 '>
            Hello
        </div>

            <Link to="/authorization">
                <Button  className='mt-2 button_non_underline'
                         type="button" label="Login"  icon="pi pi-chevron-right" iconPos="right"/>
            </Link>


            <Link to="/registration">
                <Button className='mt-2 button_non_underline'
                        type="button" label="Registration"  icon="pi pi-chevron-left" iconPos="right"/>
            </Link>


        </div>
    );
};

export default HomePage;