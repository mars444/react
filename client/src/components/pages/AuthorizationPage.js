import React, {useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {postData} from "../../functions/postSend";

import {HTTPRequest} from "../../functions/HTTPRequest";

import {
    Link,
    Route,
    useHistory,
} from "react-router-dom";

import {Form, Field} from "react-final-form";


import GoHomeBtn from "../buttons/GoHomeBtn";

const AuthorizationPage = () => {


    const printLoginForm = async (formData) => {

        console.log('formData', formData)

        try {
            await HTTPRequest('POST', '/auth', formData, 1200 )
                .then((data) => {
                    if (data.id) {
                        console.log( 'req_data  ', data)
                    }
                });

        }

        catch(err){
            console.error(err)
        }

        finally {

        }


    };
    return (
        <div className="flex flex-column align-items-center p-4 bg-white border-round 30px relative_block">
           <GoHomeBtn/>
            <div className="reg_title text-xl pb-2">
                Authorization
            </div>

            <Form
                onSubmit={printLoginForm}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className = 'pt-4' onSubmit={async event => {
                        await handleSubmit(event)
                        form.reset()
                    }}>
                        <div>
                            <Field
                                name="login"
                                component="input"
                                type="text"
                                placeholder="Login"
                            />
                        </div>
                        <div>
                            <Field
                                name="password"
                                component="input"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="buttons">
                            <button
                                className='form-btn'
                                type="submit"
                                disabled={submitting || pristine}>
                                Войти
                            </button>
                        </div>

                        {/*<pre>{JSON.stringify(values, 2, 4)}</pre>*/}

                    </form>
                )}
            />

            <Link to="/registration">
                <Button className=''
                        type="button" label="Go to registration"/>
            </Link>
        </div>
    );
};

export default AuthorizationPage;