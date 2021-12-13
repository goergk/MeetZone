import React, { useState } from "react";
import { useFormik } from "formik";
import { NavLink, useHistory } from "react-router-dom";
import classes from "../../../styles/Sign.module.css";
import Input from "../../assets/Input";
import { PageType } from "../PageType";
import * as Yup from "yup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const initialValues = {
  Username: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
};

const FORM_VALIDATION = Yup.object().shape({
  Username: Yup.string().required("Required"),
  Email: Yup.string().email("Invalid email.").required("Required"),
  Password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character."
    )
    .required("Password required."),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("Password"), null], "Password doesn't match")
    .required("Confirm password."),
});

const SignUp = () => {
  const history = useHistory();
  const changeRoute = () => history.push('/');
  const [error, setError] = useState('');

  const onSubmit = () => {
    fetch('http://127.0.0.1:8000/api/register/',{
        method:"POST",
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          "username": values.Username,
          "email": values.Email,
          "password": values.Password,
          "confirmation": values.ConfirmPassword
        })
        }).then((response) => {response.json().then(data => {
        console.warn("result", data);
        if(response.ok){
            setError('');
            changeRoute();           
      } 
      else{
        setError('');
        setError('Username already taken.');  
      }
    })});
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: FORM_VALIDATION,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <div className={classes.Main_container}>
      {
        !sessionStorage.getItem("login") 
        ?
        <>
        <AccountCircleIcon fontSize="large" />
        <h2 className={classes.Header}>Sing Up</h2>
        <div className={classes.FormContainer}>
          <form onSubmit={handleSubmit}>
            <Input
              error={errors.Username}
              value={values.Username}
              onChange={handleChange}
              type="text"
              name="Username"
              text="Username"
            />
            <Input
              error={errors.Email}
              value={values.Email}
              onChange={handleChange}
              type="text"
              name="Email"
              text="Email"
            />
            <Input
              error={errors.Password}
              value={values.Password}
              onChange={handleChange}
              type="password"
              name="Password"
              text="Password"
            />
            <Input
              error={errors.ConfirmPassword}
              value={values.ConfirmPassword}
              onChange={handleChange}
              type="password"
              name="ConfirmPassword"
              text="Confirm Password"
            />
            {error !== '' && <p className={classes.Login_Error}>{error}</p>}
            <button type='submit' className={classes.Sign_Button}>Sign Up</button>
          </form>
        </div>
        <NavLink to={PageType.SIGNIN} className={classes.Link}>
          Already have an Account?
        </NavLink>
        </>
        :
        <h2>
          You are already logged in.
        </h2>
      }
    </div>
  );
};

export default SignUp;