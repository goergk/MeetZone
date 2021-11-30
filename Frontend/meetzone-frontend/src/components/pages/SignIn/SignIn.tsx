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
    Password: ''
}

const FORM_VALIDATION = Yup.object().shape({
    Username: Yup.string()
     .required('Required'),
    Password: Yup.string()
     .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special case character."
      ).required('Required'),
});

const SignIn = () => {
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
                        Sing In
                    </h2>
                    <div className={classes.FormContainer}>                        
                        <Form>
                            <Input type="text" name="Username" text="Username"/>
                            <Input type="password" name="Password" text="Password"/>
                            <button className={classes.Sign_Button}>Sign In</button>
                        </Form>
                    </div>
                    <NavLink to={PageType.SIGNUP} className={classes.Link}>Don't have an Account?</NavLink>
                </div>
            )}            
        </Formik>        
    )
}

export default SignIn;