import React from 'react';
import { useGetEventsQuery } from '../../../services/EventsApi';
import classes from '../../../styles/EventsPage.module.css';
import Map from '../../map/Map';

interface Props{
    page_filter: string;
}

const EventsPage:React.FC<Props> = ({ page_filter }) => {

    const { data: Events_data } = useGetEventsQuery(page_filter.toLowerCase());

    console.log(Events_data);

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
