import React from 'react';
import classes from '../../styles/Input.module.css';

interface Props{
    type: string,
    name: string
}

const Input:React.FC<Props> = ({ type, name }) => {
    return (
        <div className={classes.Form_Container}>
            <input type={type} id={name}/>
        </div>
    )
}

export default Input;
