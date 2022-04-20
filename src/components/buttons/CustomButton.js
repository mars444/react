import React, {useState} from 'react';
import './button.scss';

const CustomButton = ({onClick, disabled = true, example, icon, className ='', style, children}) => {

    //const CustomButton = (props) => {
    // то же самое const {onClick, color='#000', disabled, example, icon, className, style, children} = props



    const btnClicked = (e) => {
        const variable = 'create< in component variable'
        onClick(e,example,variable)

    }

    const classNameArray = className.split(" ");

    const finalClassName = classNameArray.reduce(
        (total , value) => total + 'custom-button_' +  value + ' ', ''
    );


    const clName = `custom-button  ${finalClassName}`
    const clNameIcon = `custom-button__icon ${icon}`


    return (

            <button className={clName} disabled={disabled} onClick={btnClicked}>
                {children}
                <i className={clNameIcon}></i>
            </button>


    );
};


// {
//     {buttonName} || <i className={icon}></i>
// }

//loading pi pi-loading
// onClick   (передавать example и ивент)
// color
// disabled
// buttonName
// icon
// className
// style

// const [button, setColor] = useState({
//     onClick: onClick,
//     color: color,
//     disabled:disabled,
//     buttonName:buttonName,
// })

export default CustomButton;

