import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';
import classes from '../../styles/Icons.module.css';
import { PageType } from '../pages/PageType';
import Tennis_icon from './Tennis_icon';

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
                <svg 
                    className={classes.Icon}
                    style={{ fill: pathname === `/${PageType.TENNIS}` ? '#ceff19' : '' }}
                >
                   <Tennis_icon /> 
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
