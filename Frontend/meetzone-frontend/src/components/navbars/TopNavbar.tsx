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
                    <Link to="/Sign%20In" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button content='Sign In'/>
                    </Link>
                    <Link to="/Sign%20Up" style={{ textDecoration: 'none', color: 'white' }}> 
                        <Button content='Sign Up'/>
                    </Link>
                </div>            
            </div>
        </div>        
    )
}

export default TopNavbar;
