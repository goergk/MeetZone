import classes from '../../../styles/Navbars.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signOut } from '../../../features/login';

const Logout = () => {
    const history = useHistory();
    const changeRoute = () => history.push('/');
    const dispatch = useDispatch()
  
    const handleLogout = () => {
      dispatch(signOut());
      changeRoute();
    };

    return (<LogoutIcon className={classes.Logout_Icon} onClick={handleLogout}/>)
}

export default Logout;
