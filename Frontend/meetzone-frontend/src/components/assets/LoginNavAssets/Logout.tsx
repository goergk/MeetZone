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
      sessionStorage.removeItem('isLogged');
      dispatch(signOut());
      changeRoute();
    };

    return (
      <div onClick={handleLogout} className={classes.Nav_item_container}>
        <p>Log out</p>
        <LogoutIcon className={classes.Nav_Icon}/>
      </div>
      )
}

export default Logout;
