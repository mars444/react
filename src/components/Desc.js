import React, {useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const Desc = ({value, onChange, name}) => {

    const changeHandler = e => {
        const newValue = [...value]
        console.log(e.target.name)
        newValue[e.target.name] = e.target.value
        onChange({
            target: {value: newValue,name}
        })

        checkInput(e)

    }


    const checkInput = e => {
        if (e.target.value > 1) {

        }
    }
    return (
        <div>
            {
                value.map((item, index) => (
                    <div key={index} className="p-inputgroup desc_input">
                        <InputText onChange={changeHandler}
                                   placeholder="Vote"
                                   name={index}
                                   value={item}/>
                        <Button icon="pi pi-minus"/>
                    </div>
                ))
            }
                <div className="p-inputgroup desc_input">
                <InputText onChange={changeHandler}
                placeholder="Vote"
                value = 'ff' />
                <Button icon="pi pi-plus"/>c
                </div>






        </div>
    );
};

export default Desc;