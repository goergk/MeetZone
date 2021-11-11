import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';
import classes from '../../styles/Icons.module.css';

const Chess = () => {
    const history = useHistory();
    const handleClick = () => history.push('/Chess');
    const { pathname } = useLocation();

    return ( 
        <div className={classes.Icon_Container} id={classes.Chess_icon_container}
        onClick={handleClick}
        style={{ backgroundColor: pathname === '/Chess' ? '#282c35' : '' }}
        >
            <div className={classes.Icon_Container_2}>
                <svg className={classes.Icon}
                style={{ fill: pathname === '/Chess' ? '#a88253' : '' }}
                >
                    <path d="M7.2,16l1.1-0.2c1.6-0.3,3.3-0.5,5-0.7c-2.4,2.3-3.9,5.3-4.7,7.9h14.7c0.4-1.5,1.1-3,2.3-4.1l0.2-0.2
                        c0.2-0.2,0.3-0.4,0.3-0.6C26.6,13,24.2,8,19.8,5.3c-0.8-1.4-2-2.4-3.6-2.9l-0.9-0.3C15,2,14.7,2,14.4,2.2C14.2,2.4,14,2.7,14,3v2.4
                        l-1.4,0.7C12.2,6.3,12,6.6,12,7v0.5l-4.7,3.1C6.5,11.1,6,12.1,6,13.1V15c0,0.3,0.1,0.6,0.4,0.8C6.6,16,6.9,16,7.2,16z"/>
                    <path d="M6.8,25C6.3,25.5,6,26.2,6,27v2c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-2c0-0.8-0.3-1.5-0.8-2H6.8z"/>
                </svg>
            </div>
        
            <div className={classes.Icon_text_container}>
                <p className={classes.Icon_text}
                style={{ color: pathname === '/Chess' ? '#a88253' : '' }}
                >
                    Chess
                </p>
            </div>
        </div> 
    )
}

export default Chess;
