import React from 'react';
import './button.scss';

const CustomButton = ({onClick, color, disabled, buttonName, icon, className, style}) => {

    const styles = {
        backgroundColor: color
    }


    return (
        <div className='flex align-content-between justify-content-center'>
            <button style={styles} className={className} >

                {
                    {buttonName} ||
                    <i className={icon}></i>

                }
            </button>

        </div>
    );
};


//loading pi pi-loading
// onClick   (передавать нэйм и ивент)
// color
// disabled
// buttonName
// icon
// className
// style

export default CustomButton;

