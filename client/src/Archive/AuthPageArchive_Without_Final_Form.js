import React, {useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {postData} from "../functions/postSend";

import {HTTPRequest} from "../functions/HTTPRequest";

import {
    Link,
    Route,
    useHistory,
} from "react-router-dom";

import {Form, Field} from "react-final-form";


import GoHomeBtn from "../components/buttons/GoHomeBtn";

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
            await HTTPRequest('POST', '/auth', loginForm, 1200 )
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

            <Form
                onSubmit={printLoginForm}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className = 'pt-4' onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <Field
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    );
};

export default AuthorizationPage;