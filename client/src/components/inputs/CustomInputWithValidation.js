import React from "react";
import { useField } from "react-final-form";
import {InputText} from "primereact/inputtext";


const CustomInputWithValidation = (props) => {
    const {
        input,
        meta: { error, touched, submitError }
    } = useField(props.name, {
        initialValue: props.initialValue,
        validate: props.validate
    });

    const inputProps = {
        ...props,
        error: touched && error && true,
        className: error ? 'p-invalid' : '',
        ...input
    };

    return (

        <div className="field">
            <label htmlFor="username2" className="block">Username</label>
            <InputText {...inputProps} />
            <small id="username2-help" className="p-error block">{touched && (error || submitError) ? error : ""}</small>
        </div>
    );
}

export default CustomInputWithValidation;