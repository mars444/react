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


    const [btnStatus, setBtnStatus] = useState(false)

    const printLoginForm = async (formData) => {

        console.log('formData', formData)
        setBtnStatus(true)

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
            setBtnStatus(false)
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
                    <form className = 'pt-4 flex flex-column align-items-center' onSubmit={async event => {
                        await handleSubmit(event)
                        form.reset()
                    }}>
                        <div>
                            <Field name="login">
                                {props => (
                                    <div>
                                        <InputText
                                            name={props.input.name}
                                            value={props.input.value}
                                            className='border-round m-2'
                                            placeholder='Login'
                                            type="text"
                                            onChange={props.input.onChange}
                                        />
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <Field name="password">
                                {props => (
                                    <div>
                                        <InputText
                                            name={props.input.name}
                                            value={props.input.value}
                                            className='border-round m-2'
                                            placeholder='Password'
                                            type="password"
                                            onChange={props.input.onChange}
                                        />
                                    </div>
                                )}
                            </Field>
                        </div>

                        <div>

                        </div>

                            <Button className='mt-3 mb-4 button_non_underline' loading={btnStatus}  name='loginPressed'
                                    type="submit" label="Войти"  icon="pi pi-chevron-right" disabled={submitting || pristine} iconPos="right"/>

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