import { ErrorMessage, useField } from 'formik';
import React from 'react';
import classes from '../../styles/Input.module.css';

interface Props{
    type: string,
    name: string,
    text: string
}

const Input:React.FC<Props> = ({ type, name, text }) => {
    const [field, meta] = useField(name);

    return (
        <div className={classes.Form_Container}>
            <div className={classes.Form}>                 
                <input {...field} type={type} autoComplete="off" placeholder=" "
                className={meta.touched && meta.error ? classes.Form_Input_error : classes.Form_Input}
                /> 
                <label htmlFor={name} className={classes.Form_Label}>{text}</label>                                           
            </div>
            <ErrorMessage component="div" name={field.name} className={classes.error}/>
        </div>
        
        
    )
}

export default Input;
