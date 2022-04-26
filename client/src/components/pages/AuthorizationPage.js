import React, {useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {postData} from "../../functions/postSend";

import {
    Link,
    Route,
    useHistory,
} from "react-router-dom";


import GoHomeBtn from "../buttons/GoHomeBtn";

const AuthorizationPage = () => {
    console.log('render')

    const [loginForm, setLoginForm] = useState({
        login : '',
        password: ''
    })
    const [btnStatus, setBtnStatus] = useState(false)

    const updateLoginForm = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });

    }

    const printLoginForm = async () => {
        console.log(loginForm);

        setBtnStatus(true)


        try {
            await postData('http://localhost:3001/auth', loginForm )
                .then((data) => {
                    if (data.id) {
                        console.log(data)
                    }
                });
        }
        catch(err){
            console.error(err)
            //showError(err)
        }
        finally {
            setBtnStatus(false)



            setLoginForm({
                login: '',
                password: '',
            });
        }




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

            <Button loading={btnStatus}  name='loginPressed' className='mt-2' onClick={printLoginForm}
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