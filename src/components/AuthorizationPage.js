import React, {useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

import {
    Link,
    Route,
} from "react-router-dom";
import GoHomeBtn from "./GoHomeBtn";

const AuthorizationPage = () => {

    const [loginForm, setLoginForm] = useState({
        login : '',
        password: ''
    })

    const updateLoginForm = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });

    }

    const printLoginForm = () => {
        console.log(loginForm);
        setLoginForm({
            login: '',
            password: '',

        });
    };
    return (
        <div className="flex flex-column align-items-center p-4 bg-white border-round 30px relative_block">
           <GoHomeBtn/>
            <div className="reg_title text-xl pb-2">
                Authorization
            </div>
            <InputText onChange={updateLoginForm}
                       value={loginForm.login}
                       name='login'
                       className='border-round m-2'
                       placeholder='nickname'/>

            <InputText  onChange={updateLoginForm}
                        value={loginForm.password}
                        name='password'
                        className='border-round m-2'
                        placeholder='password'
                        type="password"/>

            <Button  name='loginPressed' className='mt-2' onClick={printLoginForm}
                    type="button" label="Login"  icon="pi pi-chevron-right" iconPos="right"/>

            <div className="sub_title pb-2 mt-2">
                or
            </div>

            <Link to="/registration">
                <Button className=''
                        type="button" label="Go to registration"/>
            </Link>

        </div>
    );
};

export default AuthorizationPage;