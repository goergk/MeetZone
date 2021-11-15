import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';
import classes from '../../styles/Icons.module.css';
import { PageType } from '../pages/PageType';

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
                <svg className={classes.Icon} id={classes.Football_icon}
                style={{ fill: pathname === `/${PageType.FOOTBALL}` ? '#30bf1c' : '' }}
                >
                    <path d="M27.5,24c1.6-2.3,2.5-5,2.5-8c0-2.7-0.8-5.2-2.1-7.3c0-0.1-0.1-0.1-0.1-0.2C25.3,4.6,21,2,16,2S6.6,4.6,4.2,8.6
                    c0,0.1-0.1,0.1-0.1,0.2c-1.3,2.1-2,4.6-2,7.3c0,3,0.9,5.7,2.5,8l0.1,0.1C7.1,27.7,11.3,30,16,30s8.8-2.3,11.4-5.8
                    C27.4,24.1,27.4,24.1,27.5,24z M26,22.5L22.4,23L21,21.6l2-5.8l3.1-1.5l2,1.2c0,0.2,0,0.4,0,0.7C28,18.4,27.3,20.7,26,22.5z
                    M25.9,9.3l-0.8,3l-3.2,1.6L17,10.5V6.6l3.4-1.7l0,0C22.7,5.8,24.6,7.3,25.9,9.3z M11.5,4.9L11.5,4.9L15,6.6v3.9L10.1,14l-3.3-1.6
                    L6,9.3C7.4,7.3,9.3,5.8,11.5,4.9z M4,15.3l2-1.2l3.1,1.6l2,5.8l-1.4,1.4L6,22.5c-1.3-1.9-2-4.1-2-6.5C4,15.8,4,15.5,4,15.3z
                    M12.9,27.6L12.9,27.6l-1.7-3.4l1.2-1.2h7.2l1.2,1.2l-1.7,3.4l0,0c-1,0.3-2,0.4-3.1,0.4S13.9,27.8,12.9,27.6z"/>
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
