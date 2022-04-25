import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "primereact/button";

const HomePage = () => {
    return (
        <div className= 'flex flex-column align-items-center p-4 bg-white border-round 30px'>
                Autorization succses

            <Link to="/">
                <Button className=''
                        type="button" label="Log out"/>
            </Link>
            </div>
    );
};

export default HomePage;