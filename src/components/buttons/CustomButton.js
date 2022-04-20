import React, {useState} from 'react';
import './button.scss';

const CustomButton = ({onClick, color, disabled, example, icon, className, style, children}) => {

    //const CustomButton = (props) => {
    // то же самое const {onClick, color='#000', disabled, example, icon, className, style, children} = props


    const stylesBtn = {
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
        opacity: 0.7,
        border: 'none'
    }

    const iconStyle = {
        paddingLeft: 10
    }

    const btnClicked = (e) => {
        const variable = true
        onClick(e,example,variable)

    }



    return (
        <div className='flex align-content-between justify-content-center'>

            <button style={stylesBtn} className={className} disabled={disabled} onClick={btnClicked}>
                {children}
                <i style={iconStyle} className={icon}></i>
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

