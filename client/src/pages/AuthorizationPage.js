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
import {useRef} from "react";
import {Toast} from "primereact/toast";

const AuthorizationPage = () => {


    const [btnStatus, setBtnStatus] = useState(false)

    const printLoginForm = async (formData) => {

        console.log('formData', formData)
        setBtnStatus(true)

        try {
            const data = await HTTPRequest('POST', '/auth', formData, 1200 )
            console.log( 'req_data  ', data)
            showSuccess(data.status)


        }

        catch(err){
            console.error(err)
            showError(err.status)
            return err
        }

        finally {
            setBtnStatus(false)
        }


    };

    const showSuccess = (text) => {
        toast.current.show({severity: 'success', summary: text});
    }
    const showError = (text) => {
        toast.current.show({severity: 'error', summary: text});
    }
    const toast = useRef(null);


    return (
        <div className='test surface-50 test_2'>
            <div className="flex flex-column align-items-center p-4 bg-white border-round 30px relative_block">
                <Toast ref={toast} />
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
        </div>

    );
};

export default AuthorizationPage;