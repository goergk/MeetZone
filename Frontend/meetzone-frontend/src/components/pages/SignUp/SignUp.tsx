import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
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

const onSubmit = () => {
  console.log("Submitted");
};

const SignUp = () => {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    validationSchema: FORM_VALIDATION,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });
  return (
    <div className={classes.Main_container}>
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
          <button type='submit' className={classes.Sign_Button}>Sign Up</button>
        </form>
      </div>
      <NavLink to={PageType.SIGNIN} className={classes.Link}>
        Already have an Account?
      </NavLink>
    </div>
  );
};

export default SignUp;