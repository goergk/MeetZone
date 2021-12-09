import React from 'react';
import '../../App.css';
import classes from '../../styles/Icons.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import { PageType } from '../pages/PageType';
import Basketball_icon from './Basketball_icon';

const Basketball = () => {
    const history = useHistory();
    const handleClick = () => history.push(`/${PageType.BASKETBALL}`);
    const { pathname } = useLocation();

    return (
        <div className={classes.Icon_Container} id={classes.Basketball_icon_container}
        onClick={handleClick}
        style={{ backgroundColor: pathname === `/${PageType.BASKETBALL}` ? '#282c35' : '' }}
        >
            <div className={classes.Icon_Container_2}>
                <svg 
                    className={classes.Icon}
                    style={{ fill: pathname === `/${PageType.BASKETBALL}` ? '#dd7e01' : '' }}
                >
                    <Basketball_icon />       
                </svg>
            </div>
        
            <div className={classes.Icon_text_container}>
                <p className={classes.Icon_text}
                style={{ color: pathname === `/${PageType.BASKETBALL}` ? '#dd7e01' : '' }}
                >
                    Basketball
                </p>
            </div>
        </div>    
    )
}

export default Basketball;
