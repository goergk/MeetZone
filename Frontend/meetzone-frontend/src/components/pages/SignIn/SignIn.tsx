import { useFormik } from "formik";
import { NavLink, useHistory } from "react-router-dom";
import classes from "../../../styles/Sign.module.css";
import Input from "../../assets/Input";
import { PageType } from "../PageType";
import * as Yup from "yup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { signIn } from '../../../features/login';

const initialValues = {
  Username: "",
  Password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  Username: Yup.string().required("Required"),
  Password: Yup.string().required("Required"),
});

const SignIn = () => {
  const history = useHistory();
  const changeRoute = () => history.push('/');
  const [error, setError] = useState('');
  const { login } = useSelector((state: RootState) => state.Login);
  const dispatch = useDispatch()

  const onSubmit = () => {
    fetch('http://127.0.0.1:8000/api/login/',{
        method:"POST",
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          "username": values.Username,
          "password": values.Password
        })
        }).then((response) => {response.json().then(data => {                  
        if(response.ok){
            setError('');           
            console.log(data);
            dispatch(signIn());
            changeRoute(); 
      } 
      else{
        setError('');
        setError('Invalid Username or Password');  
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
        !login 
        ?
        <>
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
            {error !== '' && <p className={classes.Login_Error}>{error}</p>}
            <button type="submit" className={classes.Sign_Button}>
              Sign In
            </button>
          </form>
        </div>
        <NavLink to={PageType.SIGNUP} className={classes.Link}>
          Don't have an Account?
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

export default SignIn;