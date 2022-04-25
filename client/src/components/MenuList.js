import React from 'react';
import {Link} from "react-router-dom";

const MenuList = () => {
    return (
        <div className='flex align-items-center justify-content-center'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/authorization">authorization</Link>
                </li>
                <li>
                    <Link to="/registration">registration</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuList;