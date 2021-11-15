import React from 'react';
import '../../App.css';
import classes from '../../styles/Icons.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import { PageType } from '../pages/PageType';

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
                <svg className={classes.Icon}
                style={{ fill: pathname === `/${PageType.BASKETBALL}` ? '#dd7e01' : '' }}
                >
                        <path d="M17,2.1V15h3.1c0.2-3.8,1.7-7.4,4.3-10.2C22.3,3.2,19.7,2.2,17,2.1z"/>
                        <path d="M22.1,17c0.2,3.3,1.6,6.4,3.8,8.9c2.3-2.3,3.8-5.4,4.1-8.9H22.1z"/>
                        <path d="M2.1,17c0.2,3.5,1.7,6.6,4.1,8.9c2.3-2.5,3.6-5.6,3.8-8.9H2.1z"/>
                        <path d="M9.9,15c-0.2-3.3-1.6-6.4-3.8-8.9c-2.3,2.3-3.8,5.4-4,8.9H9.9z"/>
                        <path d="M25.9,6.1c-2.3,2.5-3.6,5.6-3.8,8.9H30C29.7,11.5,28.2,8.4,25.9,6.1z"/>
                        <path d="M20.1,17H17v12.9c2.7-0.2,5.3-1.2,7.4-2.7C21.8,24.4,20.3,20.8,20.1,17z"/>
                        <path d="M15,17h-3.1c-0.2,3.8-1.7,7.4-4.3,10.2c2.1,1.6,4.6,2.6,7.4,2.7V17z"/>
                        <path d="M11.9,15H15V2.1c-2.7,0.2-5.3,1.2-7.4,2.7C10.2,7.6,11.7,11.2,11.9,15z"/>
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
