import React from 'react';
import './button.scss';

const CustomButton = ({onClick, disabled = false, loading = false, color, example, icon, className ='', children}) => {

    //const CustomButton = (props) => {
    // то же самое const {onClick, color='#000', disabled, example, icon, className, style, children} = props



    const btnClicked = (e) => {
        if(loading || disabled)   return
        const variable = 'create< in component variable'
        onClick(e,example,variable)

    }

    const btn = 'custom-button'

    const clName = `${btn} ${disabled? btn+'_disabled' : ''} ${btn}_${color} ${className}`

    const clNameIcon = `custom-button__icon custom-button__icon-${icon} custom-button__icon_loading-${loading ? 'on':'off'}`



    return (

            <button className={clName} disabled={disabled} onClick={btnClicked}>
                {children}
                <i className={clNameIcon}></i>
            </button>

    );
};


export default CustomButton;

