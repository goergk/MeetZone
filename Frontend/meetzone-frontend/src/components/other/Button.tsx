import React from 'react';
import classes from '../../styles/Button.module.css';

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
