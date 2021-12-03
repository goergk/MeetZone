import React from 'react';
import classes from '../../../styles/EventsPage.module.css';
import Map from '../../map/Map';

interface Props{
    page_filter: string;
}

const EventsPage:React.FC<Props> = ({ page_filter }) => {

    return (
        <div className={classes.Main_container}>
            <h2 className={classes.Header}>
                { page_filter } Events:
            </h2>
            <Map/>                     
        </div>
    )
}

export default EventsPage;
