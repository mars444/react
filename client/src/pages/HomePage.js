import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "primereact/button";
import CustomInputWithValidation from "../components/inputs/CustomInputWithValidation";

const HomePage = () => {
    return (
        <div className= 'flex flex-column align-items-center p-4 bg-white border-round 30px test surface-50 test_2'>
                Autorization succses

            <Link to="/">
                <Button className=''
                        type="button" label="Log out"/>
            </Link>


            </div>
    );
};

export default HomePage;