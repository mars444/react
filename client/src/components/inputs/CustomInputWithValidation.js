import React from "react";
import {Field, useField} from "react-final-form";
import {InputText} from "primereact/inputtext";
import validator from "validator";


const CustomInputWithValidation = (props) => {



    const inputProps = {
        ...props,
        Classname: `border-round m-2 ${props.className ? props.className : ''}`
    };

    const validateNullValue = value => (value ? undefined : `Пустой ${props.name}`)


    return (

                        <div className="field">
                            {/*{console.log('props.inp' , props)}*/}
                                <InputText
                                    name={props.name}
                                    placeholder={props.placeholder}
                                    type={props.type}
                                    onChange={props.input.onChange}
                                />
                            {props.meta.touched && (props.meta.error || props.meta.submitError) && <small className="p-error block">{props.meta.error || props.meta.submitError}</small>}
                        </div>




    );
}

export default CustomInputWithValidation;