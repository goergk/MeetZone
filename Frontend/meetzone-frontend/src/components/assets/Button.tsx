import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from '../../styles/Button.module.css';
import { PageType } from '../pages/PageType';

interface Props{
    content: string;
}

const Button:React.FC<Props> = ({ content }) => {

    return (
        <div className={classes.Button_container}>
            {content}
        </div>
    )
}

export default Button;
