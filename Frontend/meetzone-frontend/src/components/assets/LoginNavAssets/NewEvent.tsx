import classes from '../../../styles/Navbars.module.css';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const NewEvent = () => {

    const handleAdd = () => {
      console.log("No dziala");
    };

    return (
      <div onClick={handleAdd} className={classes.Nav_item_container}>
        <p>Add Event</p>
        <AddLocationAltIcon className={classes.Nav_Icon}/>
      </div>
      )
}

export default NewEvent;
