import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../../App.css';
import classes from '../../styles/Icons.module.css';

const All = () => {
	const history = useHistory();
	const handleClick = () => history.push('/');
	const { pathname } = useLocation();

	return (
		<div className={classes.Icon_Container} id={classes.All_icon_container}
			onClick={handleClick}
			style={{ backgroundColor: pathname === '/' ? '#282c35' : '' }}
		>
			<div className={classes.Icon_Container_2}>
				<svg className={classes.Icon}
					style={{ fill: pathname === '/' ? '#e4ad38' : '' }}
				>
					<path d="M13.4,14.6H4.3c-0.8,0-1.3-0.5-1.3-1.3V4.1c0-0.8,0.5-1.3,1.3-1.3h9.2c0.8,0,1.3,0.5,1.3,1.3v9.2
						C14.8,14.1,14.2,14.6,13.4,14.6z M5.6,12h6.6V5.4H5.6V12z"/>
					<path d="M27.9,14.6h-9.2c-0.8,0-1.3-0.5-1.3-1.3V4.1c0-0.8,0.5-1.3,1.3-1.3h9.2c0.8,0,1.3,0.5,1.3,1.3v9.2
						C29.2,14.1,28.7,14.6,27.9,14.6z M20,12h6.6V5.4H20V12z"/>
					<path d="M27.9,29.1h-9.2c-0.8,0-1.3-0.5-1.3-1.3v-9.2c0-0.8,0.5-1.3,1.3-1.3h9.2c0.8,0,1.3,0.5,1.3,1.3v9.2
						C29.2,28.6,28.7,29.1,27.9,29.1z M20,26.5h6.6v-6.6H20V26.5z"/>
					<path d="M13.4,29.1H4.3c-0.8,0-1.3-0.5-1.3-1.3v-9.2c0-0.8,0.5-1.3,1.3-1.3h9.2c0.8,0,1.3,0.5,1.3,1.3v9.2
						C14.8,28.6,14.2,29.1,13.4,29.1z M5.6,26.5h6.6v-6.6H5.6V26.5z"/>
				</svg>
			</div>

			<div className={classes.Icon_text_container}>
				<p className={classes.Icon_text}
					style={{ color: pathname === '/' ? '#e4ad38' : '' }}
				>
					All
				</p>
			</div>
		</div>

	)
}

export default All;