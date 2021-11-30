import { TextField } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

export interface IProps{
    name: string,
    label: string,
}

const TextFieldWrapper:React.FC<IProps> = ({
    name,
    label
}) => {

    const [field,meta] = useField(name);
    const configTextfield = {
        ...field,
        label: label,
        error: false,
        helperText: ''
    }

    if (meta && meta.touched && meta.error){
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <TextField {...configTextfield} variant='outlined'/>
    )
}

export default TextFieldWrapper;
