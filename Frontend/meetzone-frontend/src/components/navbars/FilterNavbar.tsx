import React from 'react';
import MeetZone from '../icons/MeetZone';
import Button from '../assets/Button';
import classes from '../../styles/Navbars.module.css';
import All from '../icons/All';
import Basketball from '../icons/Basketball';
import Volleyball from '../icons/Volleyball';
import Football from '../icons/Football';
import Tennis from '../icons/Tennis';
import Chess from '../icons/Chess';

const FilterNavbar = () => {
    return (
        <div className={classes.FilterNavbar_container}>
            <All />
            <Basketball />
            <Football />
            <Volleyball />
            <Tennis />
            <Chess />               
        </div>
    )
}

export default FilterNavbar;
