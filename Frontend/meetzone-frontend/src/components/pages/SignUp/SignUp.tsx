import { Formik, Form } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../../styles/Sign.module.css';
import Input from '../../assets/Input';
import { PageType } from '../PageType';
import * as Yup from 'yup';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const INITIAL_FORM_STATE = {
    Username: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
}

const FORM_VALIDATION = Yup.object().shape({
    Username: Yup.string()
     .required('Required'),
    Email: Yup.string()
     .email('Invalid email.')
     .required('Required'),
    Password: Yup.string()
     .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special case character."
      )
     .required('Password required.'),
    ConfirmPassword: Yup.string()
     .oneOf([Yup.ref('Password'), null], 'Password doesn\'t match')
     .required('Confirm password.')    
});

const SignUp = () => {
    return (
        <Formik
        initialValues={{
            ...INITIAL_FORM_STATE
        }}
        validationSchema={FORM_VALIDATION}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={values => {
            console.log(values);
        }}
        >
            {formik => (
                <div className={classes.Main_container}>
                    <AccountCircleIcon fontSize="large"/>
                    <h2 className={classes.Header}>
                        Sing Up
                    </h2>
                    <div className={classes.FormContainer}>
                        <Form>
                            <Input type="text" name="Username" text="Username"/>
                            <Input type="text" name="Email" text="Email"/>
                            <Input type="password" name="Password" text="Password"/>
                            <Input type="password" name="ConfirmPassword" text="Confirm Password"/>
                            <button className={classes.Sign_Button}>Sign Up</button>
                        </Form>
                    </div>
                    <NavLink to={PageType.SIGNIN} className={classes.Link}>Already have an Account?</NavLink>
                </div>
            )}            
        </Formik>        
    )
}

export default SignUp;