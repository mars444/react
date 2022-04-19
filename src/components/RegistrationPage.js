import React from 'react';

import { useState, useEffect } from 'react'

import {
    Link
} from "react-router-dom";


import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import GoHomeBtn from "./GoHomeBtn";
import Desc from "./Desc";
import { AutoComplete } from 'primereact/autocomplete';
import AddTagInput from "./AddTagInput";

const RegistrationPage = () => {

    const [form, setForm] = useState({
        nickName: '',
        password: '',
        repeatPassword: '',
        email: '',
        name: '',
        surname: '',
        gender: '',
        tags: ['hello', 'ddd']
    });

    const updateForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const printForm = () => {
        console.log(form);
        setForm({
            nickName: '',
            password: '',
            repeatPassword: '',
            email: '',
            name: '',
            surname: '',
            gender: '',
            tags: []
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



    return (
        <div>
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



                <Desc name= 'tags' value = {form.tags} updateForm = {updateForm}/>



                <Button className='mt-2 button_non_underline' onClick={printForm}
                        type="button" label="Register"  icon="pi pi-chevron-right" iconPos="right"/>

                <div className="sub_title pb-2 mt-2">
                    or
                </div>

                <Link to="/authorization">
                    <Button className=''
                            type="button" label="Go to authorization"/>
                </Link>

            </div>
        </div>
    );
};

export default RegistrationPage;