import React from 'react';
import classes from '../../../styles/EventsPage.module.css';

interface Props{
    page_filter: string;
}

const EventsPage:React.FC<Props> = ({ page_filter }) => {
    return (
        <div className={classes.Main_container}>
            <h2>
                { page_filter } Events:
            </h2>            
        </div>
    )
}

export default EventsPage;
