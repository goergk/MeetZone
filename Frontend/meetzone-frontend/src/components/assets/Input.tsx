import React from 'react';
import classes from '../../styles/Input.module.css';

interface Props{
    type: string,
    name: string
}

const Input:React.FC<Props> = ({ type, name }) => {
    return (
        <div className={classes.Form}>
            <input type={type} id={name} className={classes.Form_Input} autoComplete="off" placeholder=" "/>
            <label htmlFor={name} className={classes.Form_Label}>{name}</label>
        </div>
    )
}

export default Input;
