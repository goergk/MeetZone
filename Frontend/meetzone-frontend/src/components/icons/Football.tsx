import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';
import classes from '../../styles/Icons.module.css';
import { PageType } from '../pages/PageType';
import Football_icon from './Football_icon';

const Football = () => {
    const history = useHistory();
    const handleClick = () => history.push(`/${PageType.FOOTBALL}`);
    const { pathname } = useLocation();

    return (
        <div className={classes.Icon_Container} id={classes.Football_icon_container}
        onClick={handleClick}
        style={{ backgroundColor: pathname === `/${PageType.FOOTBALL}` ? '#282c35' : '' }}
        >
            <div className={classes.Icon_Container_2}>
                <svg 
                    className={classes.Icon} id={classes.Football_icon}
                    style={{ fill: pathname === `/${PageType.FOOTBALL}` ? '#30bf1c' : '' }}
                >                    
                    <Football_icon />
                </svg>
            </div>
        
            <div className={classes.Icon_text_container}>
                <p className={classes.Icon_text}
                style={{ color: pathname === `/${PageType.FOOTBALL}` ? '#30bf1c' : '' }}
                >
                    Football
                </p>
            </div>
        </div> 
    )
}

export default Football;
