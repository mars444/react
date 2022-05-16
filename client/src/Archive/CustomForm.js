import React from "react";
import { Form as FinalForm } from "react-final-form";

const CustomForm = (props) => {


    console.log('props.validate', props.validate)

    return (
        <FinalForm
            validate = {props.validate}
            onSubmit={props.onSubmit}
            form={props.form}
            render={renderProps => (
                <form
                    onSubmit={renderProps.handleSubmit}>
                    {props.children}
                </form>
            )}
        />
    );
}

export default CustomForm;