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
  Password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  Username: Yup.string().required("Required"),
  Password: Yup.string().required("Required"),
});

const onSubmit = () => {
  console.log("Submitted");
};

const SignIn = () => {
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
      <h2 className={classes.Header}>Sing In</h2>
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
            error={errors.Password}
            value={values.Password}
            onChange={handleChange}
            type="password"
            name="Password"
            text="Password"
          />
          <button type="submit" className={classes.Sign_Button}>
            Sign In
          </button>
        </form>
      </div>
      <NavLink to={PageType.SIGNUP} className={classes.Link}>
        Don't have an Account?
      </NavLink>
    </div>
  );
};

export default SignIn;