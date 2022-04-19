import React, {forwardRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import AddTagInput from "./AddTagInput";

const Desc = ({value, updateForm, name}) => {



    const changeHandler = e => {
        const newValue = [...value]
        console.log(e.target.name)

        newValue[e.target.name] = e.target.value

        updateForm({
            target: {value: newValue, name}
        })

        console.log(value)


    }


    const deleteTag = e => {
        console.log(e)
        const newValue = [...value]

        newValue.splice(e.name,1)

        updateForm({
            target: {value: newValue, name}
        })

        console.log(value)


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
                        <Button icon='pi pi-minus' onClick={deleteTag}/>
                    </div>
                ))
            }


            <AddTagInput className="desc_input" name= 'tags' value = {value} updateForm = {updateForm}/>







        </div>
    );
};

export default Desc;