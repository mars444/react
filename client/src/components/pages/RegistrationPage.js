
import React from 'react';

import {request} from "../../functions/requestFrom"
import { useState, useRef } from 'react'

import {
    Link
} from "react-router-dom";


import createDecorator from 'final-form-calculate'


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

import {calculationAge} from "../../functions/calculatorAge";


import {useDispatch, useSelector} from "react-redux";

import {regAction} from "../../../store/reducers/regReducer";


const calculator = createDecorator(
    {
        field: 'birthday', // when birthday changes...
        updates: {
            age: (birthdayValueDate) =>
                calculationAge(birthdayValueDate)
        }
    },

)

const RegistrationPage = () => {

    const dispatch = useDispatch()
    const regState = useSelector( state => state.regStateRoot.regState)


    const printRegForm = async (formData) => {

        console.log('formData  ', formData)
        setBtnStatus(true)

        try {
            await HTTPRequest('POST', '/registration', formData, 1200 )
                .then((data) => {
                    console.log( 'req_data  ', data)
                });

            showSuccess()
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




    const showSuccess = () => {
        toast.current.show({severity: 'success', summary: 'Success Registration'});
    }
    const showError = () => {
        toast.current.show({severity: 'error', summary: 'Заполните все поля'});
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

                    decorators={[calculator]}
                    initialValues={{tags: []}}

                    validate={values => {
                        const errors = {}
                        if (!values.login) {
                            errors.login = 'пустой логин'
                        }
                        return errors
                    }}

                    onSubmit={printRegForm}


                    render={({ handleSubmit, form, submitting, pristine, values, errors }) => (
                        <form className = 'pt-4 flex flex-column align-items-center' onSubmit={async event => {
                            await handleSubmit(event)
                            if(!errors) {
                                form.reset()
                            }

                        }}>
                            {console.log(values)}
                            {/*{console.log(dispatch(regAction(form.getState().values)))}*/}

                            <div>

                                <Field name="login">
                                    {props => (
                                        <div>
                                            <div className="field">
                                                <InputText
                                                    name={props.input.name}
                                                    value={props.input.value}
                                                    className='border-round m-2'
                                                    placeholder='Login'
                                                    type="text"
                                                    onChange={props.input.onChange}
                                                />
                                                {props.meta.error && props.meta.touched && <small className="p-error block">{props.meta.error}</small>}
                                            </div>

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
                                                readOnlyInput
                                                placeholder='birthday'
                                                className='border-round m-2'
                                                onChange={props.input.onChange}
                                            >
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
                            <div>
                                <Field name="tags">
                                    {props => (
                                        <div>
                                            <Tags
                                                name={props.input.name}
                                                value={props.input.value}
                                                updateForm = {props.input.onChange}
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