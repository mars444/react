import React, {useState} from 'react';
import './button.scss';

const CustomButton = ({onClick, color='#000', disabled, example, icon, className, style, children}) => {

    //const CustomButton = (props) => {
    // то же самое const {onClick, color='#000', disabled, example, icon, className, style, children} = props


    const styles = {
        backgroundColor: color

    }


    const funcOnClick = e => {
        console.log(example)
        console.log(e)

    }


    return (
        <div className='flex align-content-between justify-content-center'>
            <button style={styles} className={className} disabled={disabled} onClick={funcOnClick}>
                {children}
                    <i className={icon}></i>
            </button>

        </div>
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

