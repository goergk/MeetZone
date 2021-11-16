import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from '../../styles/Button.module.css';
import { PageType } from '../pages/PageType';

interface Props{
    content: string;
}

const Button:React.FC<Props> = ({ content }) => {
    const history = useHistory();
    const handleClick = () => history.push(`/${content}`);

    return (
        <div className={classes.Button_container}
        onClick={handleClick}
        >
            {content}
        </div>
    )
}

export default Button;
