import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../../styles/Sign.module.css';
import Input from '../../assets/Input';
import { PageType } from '../PageType';

const SignUp = () => {
    return (
        <div className={classes.Main_container}>
            <h2 className={classes.Header}>
                Sing Up
            </h2>
            <div className={classes.FormContainer}>
                <Input type="text" name="Username"/>
                <Input type="text" name="Email"/>
                <Input type="password" name="Password"/>
                <Input type="password" name="Confirm Password"/>
            </div>
            <NavLink to={PageType.SIGNIN} className={classes.Link}>Already have an Account?</NavLink>
        </div>
    )
}

export default SignUp;