import React, {forwardRef, useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import AddTagInput from "./AddTagInput";
import AddTest from "./AddInput";
import DeleteInput from "./DeleteInput";
import AddInput from "./AddInput";

const Tags = ({value, updateForm, name}) => {


    const changeHandler = e => {
        const newValue = [...value]
        console.log(e.target.name)

        newValue[e.target.name] = e.target.value

        updateForm({
            target: {value: newValue, name}
        })

        console.log(value)


    }


    const deleteTag = index => {


            const newValue = [...value]

            newValue.splice(index,1)

            updateForm({
                target: {value: newValue, name}
            })

            console.log(newValue)


    }



    const addTag = (item) => {
        if (item) {
            const newValue = [...value]

            newValue.push(item)

            updateForm({
                target: {value: newValue, name}
            })

            console.log(newValue)
        }


    }

    return (
        <div>
            {
                value.map((item, index) => (
                    <div key={index} className="p-inputgroup desc_input">
                        <InputText onChange={changeHandler}
                                   placeholder="Vote"
                                   name={index}
                                   value={item}/>
                        <Button icon='pi pi-minus' onClick={() => {deleteTag(index)}}  />
                    </div>
                ))
            }

            <AddInput onChange={addTag}/>

        </div>
    );
};

export default Tags;