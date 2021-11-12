import React from 'react';
import classes from '../../styles/CurrentPage.module.css';

interface Props{
    page_filter: string;
}

const CurrentPage:React.FC<Props> = ({ page_filter }) => {
    return (
        <div className={classes.Main_container}>
            <h2>
                {page_filter} events:
            </h2>            
        </div>
    )
}

export default CurrentPage;
