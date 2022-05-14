import React from "react";
import { Form as FinalForm } from "react-final-form";

const CustomForm = (props) => {
    return (
        <FinalForm
            validate={props.validate}
            onSubmit={props.onSubmit}
            render={renderProps => (
                <form onSubmit={renderProps.handleSubmit}>
                    {props.children(renderProps)}
                </form>
            )}
        />
    );
}

export default CustomForm;