import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';
import classes from '../../styles/Icons.module.css';
import { PageType } from '../pages/PageType';

const Tennis = () => {
    const history = useHistory();
    const handleClick = () => history.push(`/${PageType.TENNIS}`);
    const { pathname } = useLocation();

    return (        
        <div className={classes.Icon_Container} id={classes.Tennis_icon_container}
        onClick={handleClick}
        style={{ backgroundColor: pathname === `/${PageType.TENNIS}` ? '#282c35' : '' }}
        >
            <div className={classes.Icon_Container_2}>
                <svg className={classes.Icon}
                style={{ fill: pathname === `/${PageType.TENNIS}` ? '#ceff19' : '' }}
                >
                    <path d="M25.9,6.1C23.4,8.9,22,12.3,22,16s1.4,7.1,3.9,9.9c2.6-2.5,4.1-6,4.1-9.9S28.4,8.6,25.9,6.1z"/>
                    <path d="M20,16c0-4.2,1.5-8.1,4.3-11.2C22,3,19.1,2,16,2s-6,1-8.3,2.8c2.8,3.1,4.3,7,4.3,11.2s-1.5,8.1-4.3,11.2
                        C10,29,12.9,30,16,30s6-1,8.3-2.8C21.5,24.1,20,20.2,20,16z"/>
                    <path d="M6.1,25.9C8.6,23.1,10,19.7,10,16S8.6,8.9,6.1,6.1C3.6,8.6,2,12.1,2,16S3.6,23.4,6.1,25.9z"/>
                </svg>
            </div>
        
            <div className={classes.Icon_text_container}>
                <p className={classes.Icon_text}
                style={{ color: pathname === `/${PageType.TENNIS}` ? '#ceff19' : '' }}
                >
                    Tennis
                </p>
            </div>
    </div> 
    )
}

export default Tennis;
