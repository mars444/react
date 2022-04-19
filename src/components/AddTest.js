import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useState} from "react";

const AddTagInput = ({onChange}) => {


    const [value, setValue] = useState('')


    const sendInput = () => {
        onChange(value)
        setValue('')

    }

    return (
        <div>
            <div className="p-inputgroup desc_input">
                <InputText onChange={e => {setValue(e.target.value)}}
                           placeholder="Vote"
                           value = {value}/>
                <Button disabled = {!value} icon= {value ? 'pi pi-question' : 'pi pi-plus'}  onClick={sendInput}/>
            </div>
        </div>
    );
};

export default AddTagInput;