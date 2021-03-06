import React from 'react';

import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import CustomButton from "../components/buttons/CustomButton";

const StartPage = () => {

    const getElements = (e,exampleProp,exampleVar) => {
        console.log(e)
        console.log(exampleProp)
        console.log(exampleVar)
    }


    return (
        <div className= 'flex flex-column align-items-center p-4 bg-white border-round 30px test surface-50 test_2'>
        <div className= 'text-4xl pb-10 '>
            Hello
        </div>

            <Link to="/authorization">

                <Button  className='mt-2 button_non_underline'
                         type="button" label="Login"  icon="pi pi-chevron-right" iconPos="right"/>
            </Link>


            <Link to="/registration">
                <Button className='mt-2 button_non_underline'
                        type="button" label="Registration"  icon="pi pi-chevron-left" iconPos="right"/>
            </Link>

            <Link to="/dict">
                <Button className='mt-6 button_non_underline'
                        type="button" label="Dict"  icon="pi pi-plus" iconPos="right"/>
            </Link>

            <Link to="/hook_1">

                <Button  className='mt-2 button_non_underline'
                         type="button" label="HOOK_1"  icon="pi pi-chevron-right" iconPos="right"/>
            </Link>

            {/*<Link to="/hook_2">*/}

            {/*    <Button  className='mt-2 button_non_underline'*/}
            {/*             type="button" label="HOOK_2"  icon="pi pi-chevron-right" iconPos="right"/>*/}
            {/*</Link>*/}

            {/*<Link to="/hook_3">*/}

            {/*    <Button  className='mt-2 button_non_underline'*/}
            {/*             type="button" label="HOOK_3"  icon="pi pi-chevron-right" iconPos="right"/>*/}
            {/*</Link>*/}

            <Link to="/table_adaptive">

                <Button  className='mt-2 button_non_underline'
                         type="button" label="Adaptive_Table"  icon="pi pi-chevron-right" iconPos="right"/>
            </Link>


            {/*<CustomButton className='m-1 mt-4' color='red-1' disabled={true}  example='exapleParametr444' onClick={getElements}>*/}
                {/*    Click Me*/}
                {/*</CustomButton>*/}

        </div>
    );
};

export default StartPage;