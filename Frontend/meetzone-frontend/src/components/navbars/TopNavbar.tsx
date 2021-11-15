import React from 'react';
import MeetZone from '../icons/MeetZone';
import Button from '../assets/Button';
import classes from '../../styles/Navbars.module.css';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
    return (
        <div className={classes.MainNavbar_container}>
            <div className={classes.TopNavbar_container}>
                <Link to="/" style={{ textDecoration: 'none' }}><MeetZone /></Link>                
                <div className={classes.Buttons_container}>
                    <Button content='Sign In'/>
                    <Button content='Sign Up'/>
                </div>            
            </div>
        </div>        
    )
}

export default TopNavbar;
