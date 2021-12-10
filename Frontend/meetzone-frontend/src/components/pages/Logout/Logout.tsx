import classes from '../../../styles/Navbars.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
    const changeRoute = () => history.push('/');
  
    const handleLogout = () => {
      fetch('http://127.0.0.1:8000/api/logout/',{
          method:"POST",
          headers: {
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json;charset=UTF-8'
          }}).then((response) => {response.json().then(data => {
          console.warn("result", data);
          if(response.ok){
              sessionStorage.removeItem('login');
              changeRoute();
            }
      })});
    };

    return (<LogoutIcon className={classes.Logout_Icon} onClick={handleLogout}/>)
}

export default Logout;
