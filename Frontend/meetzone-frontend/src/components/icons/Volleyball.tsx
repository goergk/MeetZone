import React from 'react';
import '../../App.css';
import classes from '../../styles/Icons.module.css';

const Volleyball = () => {
    return (
        <div className={classes.Icon_Container} id={classes.Volleyball_icon_container}>
            <div className={classes.Icon_Container_2}>
                <svg className={classes.Icon}>
                    <path d="M23,17.2c0-0.2,0-0.3,0-0.5c0-6.7-4-12.6-9.8-14.5c-1,0.2-2,0.5-2.9,0.9c3.8,3,6.1,7.5,6.3,12.4
                        C18.7,16.6,20.9,17.1,23,17.2z"/>
                    <path d="M15.8,17.3c-1.9,1.2-3.5,2.8-4.6,4.7c0.1,0.1,0.3,0.2,0.4,0.2c5.9,3.4,13.1,2.8,17.6-1.4
                        c0.3-0.9,0.6-1.9,0.7-2.9c-2,0.9-4.2,1.3-6.4,1.3C20.8,19.2,18.2,18.6,15.8,17.3z"/>
                    <path d="M25.1,16.7c0,0.1,0,0.3,0,0.4c1.7-0.2,3.4-0.7,4.9-1.5c-0.2-7-5.6-12.8-12.5-13.5C22,5.1,25.1,10.6,25.1,16.7z
                        "/>
                    <path d="M11.6,7.8c0.1-0.1,0.2-0.1,0.3-0.2C11,6.3,9.8,5.1,8.5,4.2C4.6,6.7,2,11.1,2,16c0,1.6,0.3,3.2,0.8,4.6
                        C3.5,15.5,6.6,10.6,11.6,7.8z"/>
                    <path d="M19.6,26.4c-3.1,0-6.2-0.8-9.1-2.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.6,1.4-1,2.9-1.2,4.4c2,1.2,4.4,1.9,6.9,1.9
                        c4.4,0,8.4-2.1,10.9-5.3C24.7,25.8,22.2,26.4,19.6,26.4z"/>
                    <path d="M14.7,15.6c-0.1-2.2-0.7-4.4-1.7-6.3c-0.1,0.1-0.3,0.1-0.4,0.2C7,12.7,4,18.7,4.8,24.4
                        c0.7,0.9,1.5,1.8,2.4,2.5C8,22.3,10.7,18.1,14.7,15.6z"/>
                </svg>
            </div>
        
            <div className={classes.Icon_text_container}>
                <p className={classes.Icon_text}>
                    Volleyball
                </p>
            </div>
        </div>
    )
}

export default Volleyball;
