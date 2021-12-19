import React, { MouseEventHandler } from 'react';
import classes from '../../styles/EventsPage.module.css';
import { RootObject } from '../../services/EventsApi';
import Volleyball_icon from '../icons/Volleyball_icon';
import Football_icon from '../icons/Football_icon';
import Basketball_icon from '../icons/Basketball_icon';
import Tennis_icon from '../icons/Tennis_icon';
import Chess_icon from '../icons/Chess_icon';
import Map_icon from '../icons/Map_icon';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Props{
    data: RootObject | undefined;
}

const Events:React.FC<Props> = ({ data }) => {
    let color = 'white'
    const login = useSelector((state: RootState) => state.Login.login);

    return (
        <>  
            {data?.events.map(event => {
                if(event.type === 'Basketball'){color = '#dd7e01'} 
                else if(event.type === 'Football'){color = '#30bf1c'}
                else if(event.type === 'Volleyball'){color = '#2160d4'}
                else if(event.type === 'Tennis'){color = '#ceff19'}
                else if(event.type === 'Chess'){color = '#a88253'} 

                return(
                    <div className={classes.Single_Event} key={event.id}>                    
                        <div className={classes.Event_Logo} style={{'borderColor': color}}>
                            <svg style={{'width': '32px', 'height': '32px', 'fill': color}}>
                                {event.type === 'Basketball' && <Basketball_icon />}
                                {event.type === 'Football' && <Football_icon />}
                                {event.type === 'Volleyball' && <Volleyball_icon />}
                                {event.type === 'Tennis' && <Tennis_icon />}
                                {event.type === 'Chess' && <Chess_icon />}
                            </svg>
                        </div>                        
                        <div className={classes.Event_Content}>                        
                            <div className={classes.Description_Container}>
                                <p style={{'fontSize': '0.8em', 'color': 'rgb(202, 202, 202)'}}>
                                    Created: <b>{event.creation_date.toString().split('T')[0]}</b> by <b>{event.creator.username}</b>
                                </p>
                                <p style={{'fontSize': '0.9em', 'marginTop': '0em', 'color': 'rgb(202, 202, 202)'}}>
                                    {event.note}
                                </p>
                            </div>
                            <div className={classes.Join_Container}>
                                <div className={classes.Counter_Container}>                                    
                                    <span>
                                        {event.number_of_people}
                                    </span>
                                    |
                                    <span style={{'color': '#e4ad38'}}>
                                        {event.people_needed}
                                    </span>
                                </div>
                                {
                                    login
                                    ?
                                    <div className={classes.Join_Button_Container}>
                                        Join
                                    </div>
                                    :
                                    <h5 style={{'marginTop': '0.8em', 'textAlign': 'center'}}>
                                        You have to be logged in to participate.
                                    </h5>
                                }
                                                                    
                            </div>
                            <div className={classes.Map_Icon_Container}>
                                <svg className={classes.Map_icon}>
                                    <Map_icon />
                                </svg>                                                                
                            </div>                        
                        </div>
                    </div>
                )                
            })}          
        </>
    )
}

export default Events;
