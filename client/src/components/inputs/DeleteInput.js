import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useState} from "react";

const AddTagInput = ({onChange, value}) => {


    const [valueInput, setValue] = useState(value)


    const sendInput = () => {
        onChange(valueInput)
    }


    const updateInput = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <div className="p-inputgroup desc_input">
                <InputText onChange={updateInput}
                           placeholder="Vote"
                           value={valueInput}/>
                <Button icon = 'pi pi-minus'  onClick={sendInput}/>
            </div>
        </div>
    );
};

export default AddTagInput;