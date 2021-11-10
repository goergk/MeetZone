import React from 'react';
import MeetZone from '../icons/MeetZone';
import Button from '../other/Button';
import classes from '../../styles/Navbars.module.css';

const TopNavbar = () => {
    return (
        <div className={classes.TopNavbar_container}>

            <MeetZone />
            <div className={classes.Buttons_container}>
                <Button content='Sign In'/>
                <Button content='Sign Up'/>
            </div>            
        </div>
    )
}

export default TopNavbar;
