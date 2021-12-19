import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';
import classes from '../../styles/Icons.module.css';
import { PageType } from '../pages/PageType';
import Volleyball_icon from './Volleyball_icon';

const Volleyball = () => {
    const history = useHistory();
    const handleClick = () => history.push(`/${PageType.VOLLEYBALL}`);
    const { pathname } = useLocation();

    return (
        <div className={classes.Icon_Container} id={classes.Volleyball_icon_container}
            onClick={handleClick}
            style={{ backgroundColor: pathname === `/${PageType.VOLLEYBALL}` ? '#282c35' : '' }}
        >
            <div className={classes.Icon_Container_2}>
                <svg className={classes.Icon}
                    style={{ fill: pathname === `/${PageType.VOLLEYBALL}` ? '#2160d4' : '' }}
                >
                    <Volleyball_icon />
                </svg>
            </div>

            <div className={classes.Icon_text_container}>
                <p className={classes.Icon_text}
                    style={{ color: pathname === `/${PageType.VOLLEYBALL}` ? '#2160d4' : '' }}
                >
                    Volleyball
                </p>
            </div>
        </div>
    )
}

export default Volleyball;
