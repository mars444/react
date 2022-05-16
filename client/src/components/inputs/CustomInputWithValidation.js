import React from "react";
import {Field, useField} from "react-final-form";
import {InputText} from "primereact/inputtext";
import validator from "validator";


const CustomInputWithValidation = (props) => {



    const inputProps = {
        ...props,
        Classname: `border-round m-2 ${props.className ? props.className : ''}`
    };


    return (

        <div>
            <Field {...inputProps}>
                {props => (
                        <div className="field">
                            {/*{console.log('props.input.name' , props.input.name)}*/}
                                <InputText
                                    name={props.input.name}
                                    placeholder={props.placeholder}
                                    type={props.input.type}
                                    onChange={props.input.onChange}
                                />
                            <small className="p-error block">{props.error ? props.validationErrorMessage : ""}</small>
                        </div>

                )}
            </Field>
        </div>




    );
}

export default CustomInputWithValidation;