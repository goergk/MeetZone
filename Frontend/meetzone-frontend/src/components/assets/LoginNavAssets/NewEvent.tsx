import classes from '../../../styles/Navbars.module.css';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useHistory } from 'react-router-dom';

const NewEvent = () => {
  const history = useHistory();
  const changeRoute = () => history.push('/Add');

  const handleAdd = () => {
    changeRoute();
  };

  return (
    <div onClick={handleAdd} className={classes.Nav_item_container}>
      <p>Add Event</p>
      <AddLocationAltIcon className={classes.Nav_Icon}/>
    </div>
    )
}

export default NewEvent;
