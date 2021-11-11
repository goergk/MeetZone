import React from 'react';
import classes from '../../styles/CurrentPage.module.css';

interface Props{
    page_filter: string;
}

const CurrentPage:React.FC<Props> = ({ page_filter }) => {
    return (
        <div className={classes.Main_container}>
            {page_filter}
        </div>
    )
}

export default CurrentPage;
