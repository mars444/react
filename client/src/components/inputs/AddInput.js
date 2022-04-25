import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useState} from "react";

const AddTagInput = ({onChange}) => {


    const [valueInput, setValue] = useState('')


    const sendInput = () => {
        onChange(valueInput)
        setValue('')

    }

    const iconType = () => valueInput ?  'pi pi-plus' : 'pi pi-question'

    const updateInput = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <div className="p-inputgroup desc_input">
                <InputText onChange={updateInput}
                           placeholder="Vote"
                           value = {valueInput}/>
                <Button disabled = {!valueInput} icon = {iconType()}  onClick={sendInput}/>
            </div>
        </div>
    );
};

export default AddTagInput;