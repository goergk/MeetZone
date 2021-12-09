import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';
import classes from '../../styles/Icons.module.css';
import { PageType } from '../pages/PageType';
import Chess_icon from './Chess_icon';

const Chess = () => {
    const history = useHistory();
    const handleClick = () => history.push(`/${PageType.CHESS}`);
    const { pathname } = useLocation();

    return ( 
        <div className={classes.Icon_Container} id={classes.Chess_icon_container}
        onClick={handleClick}
        style={{ backgroundColor: pathname === `/${PageType.CHESS}` ? '#282c35' : '' }}
        >
            <div className={classes.Icon_Container_2}>
                <svg 
                    className={classes.Icon}
                    style={{ fill: pathname === `/${PageType.CHESS}` ? '#a88253' : '' }}
                >
                    <Chess_icon />
                </svg>
            </div>
        
            <div className={classes.Icon_text_container}>
                <p className={classes.Icon_text}
                style={{ color: pathname === `/${PageType.CHESS}` ? '#a88253' : '' }}
                >
                    Chess
                </p>
            </div>
        </div> 
    )
}

export default Chess;
