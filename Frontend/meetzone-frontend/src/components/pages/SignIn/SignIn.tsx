import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../../styles/Sign.module.css';
import Input from '../../assets/Input';
import { PageType } from '../PageType';

const SignIn = () => {
    return (
        <div className={classes.Main_container}>
            <h2 className={classes.Header}>
                Sign In
            </h2>
            <div className={classes.FormContainer}>
            </div>
            <NavLink to={PageType.SIGNUP} className={classes.Link}>Don't have an Account?</NavLink>
        </div>
    )
}

export default SignIn;
