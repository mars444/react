import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useState} from "react";

const AddTagInput = ({value, updateForm, name}) => {

    const [inputStyle, setInputStyle] = useState({
        value: '',
        btnStyle: '',
        btnDisabled: true
    })

    const checkInputValue = e => {

        if (e.target.value.length > 0) {

            setInputStyle(
                {
                        value: e.target.value,
                        btnStyle: 'pi pi-plus',
                        btnDisabled: false
                      }
            )
        } else {
            setInputStyle(
                {value: e.target.value,
                    btnStyle: '',
                    btnDisabled: true
                }
            )
        }
    }

    const addItem = e => {
        console.log(e)

        const newValue = [...value]
        newValue.push(e.target.value)

        updateForm({
            target: {value: newValue, name}
        })

        setInputStyle(
            {
                value: '',
                btnStyle: '',
                btnDisabled: true
            }
        )

    }

    return (
        <div>
            <div className="p-inputgroup desc_input">
                <InputText onChange={checkInputValue}
                           placeholder="Vote"
                           value = {inputStyle.value}/>
                <Button disabled={inputStyle.btnDisabled} icon={inputStyle.btnStyle} onClick={addItem} value={inputStyle.value}/>
            </div>
        </div>
    );
};

export default AddTagInput;