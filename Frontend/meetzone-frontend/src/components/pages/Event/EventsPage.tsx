import React from 'react';
import { useGetEventsQuery } from '../../../services/EventsApi';
import classes from '../../../styles/EventsPage.module.css';
import Events from '../../assets/Events';
import Loader from '../../icons/Loader';
import Map from '../../map/Map';

interface Props{
    page_filter: string;
}

const EventsPage:React.FC<Props> = ({ page_filter }) => {

    const { data: Events_data, isFetching } = useGetEventsQuery(page_filter.toLowerCase());

    console.log(Events_data);

    return (
        <div className={classes.Main_container}>
            <h2 className={classes.Header}>
                { page_filter } Events:
            </h2>
            <Map data={Events_data}/>
            <div className={classes.Events_container}>
                { isFetching && <Loader />}
                { Events_data?.length === 0 ?
                    (
                        <h2>No Events found in this category.</h2>
                    ) :
                    (
                        <Events data={Events_data}/>
                    )
                } 
            </div>                         
        </div>
    )
}

export default EventsPage;
