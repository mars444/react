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
        ...input
    };

    return (

        <div className="field">
            <InputText {...inputProps} validateOnly={null} className = {touched && (error || submitError) ? 'p-invalid' : ''} />
            <small className="p-error block">{touched && (error || submitError) ? error : ""}</small>
        </div>
    );
}

export default CustomInputWithValidation;