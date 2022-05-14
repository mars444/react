import React from "react";
import {Field, useField} from "react-final-form";
import {InputText} from "primereact/inputtext";
import validator from "validator";


const CustomInputWithValidation = (props) => {


        console.log('props.validate', props.validate)

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

        <Field  name="login">
            {props => (
                <div>
                    <div className="field">
                        <InputText {...inputProps}  className = {touched && (error || submitError) ? 'p-invalid' : ''} />
                        <small className="p-error block">{touched && (error || submitError) ? error : ""}</small>
                    </div>

                </div>
            )}
        </Field>


    );
}

export default CustomInputWithValidation;