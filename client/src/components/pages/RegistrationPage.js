
import React from 'react';

import {request} from "../../functions/requestFrom"
import { useState, useRef } from 'react'

import {
    Link
} from "react-router-dom";


import createDecorator from 'final-form-calculate'



import {Button} from "primereact/button";
import GoHomeBtn from "../buttons/GoHomeBtn";

import { Toast } from 'primereact/toast';
import validator from "validator/es";



import {HTTPRequest} from "../../functions/HTTPRequest";

import {calculationAge} from "../../functions/calculatorAge";

import CustomInputWithValidation from "../inputs/CustomInputWithValidation";
import CustomForm from "../inputs/CustomForm";


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

    // const dispatch = useDispatch()
    // const regState = useSelector( state => state.regStateRoot.regState)


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

                <CustomForm
                    onSubmit={printRegForm}>
                    {props => (
                        <div>

                                <CustomInputWithValidation
                                    name="username"
                                    placeholder="Username"
                                    validate={v =>
                                        !validator.isEmail(v || "") && "Please Enter a Valid Email!"
                                    }
                                />

                            <CustomInputWithValidation
                                name="email"
                                placeholder="email"
                                validate={v =>
                                    !validator.isNumeric(v || "") && "Please Enter a Valid number!"
                                }
                            />

                                <CustomInputWithValidation name="password" type="password" placeholder="Password" />

                            <Button loading={btnStatus}  name='loginPressed' className='mt-3 mb-4'
                                    type="submit" label="Зарегистрироваться"  icon="pi pi-chevron-right"  iconPos="right"/>

                        </div>
                    )}


                </CustomForm>




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