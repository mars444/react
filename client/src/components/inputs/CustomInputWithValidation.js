import React from 'react';

import {InputText} from "primereact/inputtext";

const CustomInputWithValidation = ({name, value, placeholder, type, onChange, errorValue}) => {
    return (
        <div className='field'>
            <InputText
                className="block border-round m-2"
                placeholder={placeholder}
                type={type}
                onChange={onChange}
            />
            <small className="p-error block">{errorValue}</small>
        </div>
    );
};

export default CustomInputWithValidation;