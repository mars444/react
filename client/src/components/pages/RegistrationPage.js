import React from 'react';

import {request} from "../../functions/requestFrom"
import { useState, useRef } from 'react'

import {
    Link
} from "react-router-dom";


import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import GoHomeBtn from "../buttons/GoHomeBtn";
import Tags from "../Tags";
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import {postData} from "../../functions/postSend";


import {Form, Field} from "react-final-form"
import {HTTPRequest} from "../../functions/HTTPRequest";

import { useField } from 'react-final-form'

const RegistrationPage = () => {


    const printRegForm = async (formData) => {

        console.log('formData', formData)
        setBtnStatus(true)

        try {
            await HTTPRequest('POST', '/registration', formData, 1200 )
                .then((data) => {
                        console.log( 'req_data  ', data)
                });

        }

        catch(err){
            console.error(err)
        }

        finally {
            setBtnStatus(false)
        }


    };



    const [btnStatus, setBtnStatus] = useState(false)



    const [filteredItems, setFilteredItems] = useState(null);

    
    const itemsGender = [
        {label: 'М', value: 'М'},
        {label: 'Ж', value: 'Ж'},

    ]

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side

        let _filteredItems = [];

        for(let i = 0; i < itemsGender.length; i++) {
            let item = itemsGender[i];
            _filteredItems.push(item);

        }

        setFilteredItems(_filteredItems);
    }




    const calculationAge = e => {

        console.log('eeee', e)
        const curDate = new Date()
        const eDate = e.target.value
        if(e.target.value) {
            const timeDiff = Math.abs(eDate.getTime() - curDate.getTime())

            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365))
        }


    }



    const showSuccess = () => {
        toast.current.show({severity: 'success', summary: 'Success Message'});
    }
    const showError = (text) => {
        toast.current.show({severity: 'error', summary: text});
    }


    const toast = useRef(null);

    return (
        <div>

            <Toast ref={toast} />

            <div className="flex flex-column align-items-center p-4 bg-white border-round m-2 relative_block">
                <GoHomeBtn/>

                <div className="reg_title text-xl pb-2">
                    Registration
                </div>

                <Form

                    mutators={{
                        setAge: (args, state, utils) => {
                            console.log('args', args[0].target)
                            console.log('state  ', state)
                            utils.changeValue(state, 'age', () => {
                                const curDate = new Date()
                                const eDate = args[0].target.value
                                    const timeDiff = Math.abs(eDate.getTime() - curDate.getTime())

                                    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365))

                                return diffDays
                            })
                        },
                    }}

                    onSubmit={printRegForm}
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
                                <Field name="repeatPassword">
                                    {props => (
                                        <div>
                                            <InputText
                                                name={props.input.name}
                                                value={props.input.value}
                                                className='border-round m-2'
                                                placeholder='repeat password'
                                                type="password"
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div>
                                <Field name="mail">
                                    {props => (
                                        <div>
                                            <InputText
                                                name={props.input.name}
                                                value={props.input.value}
                                                className='border-round m-2'
                                                placeholder='email'
                                                type="text"
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div>
                                <Field name="name">
                                    {props => (
                                        <div>
                                            <InputText
                                                name={props.input.name}
                                                value={props.input.value}
                                                className='border-round m-2'
                                                placeholder='name'
                                                type="text"
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div>
                                <Field name="surname">
                                    {props => (
                                        <div>
                                            <InputText
                                                name={props.input.name}
                                                value={props.input.value}
                                                className='border-round m-2'
                                                placeholder='surname'
                                                type="text"
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div>
                                <Field name="birthday">
                                    {props => (
                                        <div>
                                            <Calendar
                                                name={props.input.name}
                                                value={props.input.value}
                                                placeholder='birthday'
                                                className='border-round m-2'
                                                onChange={form.mutators.setAge}>
                                            </Calendar>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div>
                                <Field name="age">
                                    {props => (
                                        <div>
                                            <InputText mask="99"
                                                       name={props.input.name}
                                                       value={props.input.value}
                                                       onChange={props.input.onChange}
                                                       className='border-round m-2'
                                                       placeholder='your age'/>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div>
                                <Field name="gender">
                                    {props => (
                                        <div>
                                            <AutoComplete
                                                placeholder='Пол'
                                                name={props.input.name}
                                                value={props.input.value}
                                                suggestions={itemsGender}
                                                completeMethod={searchItems}
                                                field="label"
                                                dropdown
                                                className='select'
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className="buttons">

                                <Button loading={btnStatus}  name='loginPressed' className='mt-3 mb-4'
                                        type="submit" label="Зарегистрироваться"  icon="pi pi-chevron-right" disabled={submitting || pristine} iconPos="right"/>
                            </div>

                            {/*<pre>{JSON.stringify(values, 2, 4)}</pre>*/}

                        </form>
                    )}
                />

                {/*<Tags name= 'tags' value = {form.tags} updateForm = {updateForm}/>*/}


                <Link to="/authorization">
                    <Button className=''
                            type="button" label="Go to authorization"/>
                </Link>

            </div>



            <Toast ref={toast} />

        </div>
    );
};

export default RegistrationPage;