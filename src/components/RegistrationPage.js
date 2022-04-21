import React from 'react';

import {request} from "../functions/requestFrom";

import { useState, useRef } from 'react'

import {
    Link
} from "react-router-dom";


import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import GoHomeBtn from "./GoHomeBtn";
import Tags from "./Tags";
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';

const RegistrationPage = () => {

    const [form, setForm] = useState({
        nickName: '',
        password: '',
        repeatPassword: '',
        email: '',
        name: '',
        surname: '',
        gender: '',
        tags: [],
        birthday: null,
        age: ''
    });

    const [btnStatus, setBtnStatus] = useState(false)

    const updateForm = e => {

            setForm({
                ...form,
                [e.target.name]: e.target.value
            });

    };


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
        const curDate = new Date()
        const eDate = e.target.value
        if(e.target.value) {
            const timeDiff = Math.abs(eDate.getTime() - curDate.getTime())


            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365))

            setForm({
                ...form,
                [e.target.name]: e.target.value,
                age:diffDays
            });
        }


    }

    const clearForm = () => {
        setForm({
            nickName: '',
            password: '',
            repeatPassword: '',
            email: '',
            name: '',
            surname: '',
            gender: '',
            tags: [],
            birthday: null,
            age: ''
        });
    }


    const requestSend = async () => {
        console.log(form)
        setBtnStatus(true)

        try {
            await request(form)
            //showSuccess()
            console.log('succses')
            return new Error('666')
        }
        catch(err){
                console.error(err)
                //showError(err)
        }


            clearForm()
            setBtnStatus(false)






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
                <InputText value={form.nickName}
                           onChange={updateForm}
                           name='nickName' className='border-round m-2'
                           placeholder='nickname'/>

                <InputText value={form.password}
                           type="password"
                           onChange={updateForm}
                           name='password' className=' border-round m-2'
                           placeholder='password'/>

                <InputText value={form.repeatPassword}
                           type="password"
                           onChange={updateForm}
                           name='repeatPassword' className=' border-round m-2'
                           placeholder='password'/>

                <InputText value={form.email}
                           onChange={updateForm}
                           name='email'
                            className='border-round m-2'
                            placeholder='email'/>

                <InputText value={form.name}
                           onChange={updateForm}
                           name='name'
                           className='border-round m-2'
                           placeholder='name'/>

                <InputText value={form.surname}
                           onChange={updateForm}
                           name='surname'
                           placeholder='surname'/>

                <Calendar placeholder='birthday' name='birthday' className='border-round m-2' value={form.birthday} onChange={calculationAge}></Calendar>


                <InputText mask="99" value={form.age}
                           name='age'
                           onChange={updateForm}
                           className='border-round m-2'
                           placeholder='your age'/>


                <AutoComplete
                    placeholder='Пол'
                    name='gender'
                    value={form.gender}
                    suggestions={itemsGender}
                    completeMethod={searchItems}
                    field="label"
                    dropdown
                    className='select'
                    onChange={updateForm}
                />



                <Tags name= 'tags' value = {form.tags} updateForm = {updateForm}/>



                <Button className='mt-2 button_non_underline' onClick={requestSend} loading={btnStatus}
                        type="button" label="Register"  icon="pi pi-chevron-right" iconPos="right"/>

                <div className="sub_title pb-2 mt-2">
                    or
                </div>

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