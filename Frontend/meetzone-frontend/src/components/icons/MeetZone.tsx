import React, { useEffect, useState } from 'react';
import classes from '../../styles/Logo.module.css';

const MeetZone = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 624);

    const updateMedia = () => {
        setMobile(window.innerWidth < 624)
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className={classes.Icon_container}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className={classes.Icon} xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 48 48" xmlSpace="preserve">
                <path className={classes.st0} d="M8.5,16.6C8.5,8.1,15.5,1.2,24,1.2s15.5,6.9,15.5,15.5S24,47.4,24,47.1C24,47.1,8.5,25.2,8.5,16.6z" />
                <path className={classes.st1} d="M14.2,10.9c0-1.5,1.2-2.8,2.8-2.8s2.8,1.2,2.8,2.8" />
                <path className={classes.st1} d="M28.2,10.9c0-1.5,1.2-2.8,2.8-2.8c1.5,0,2.8,1.2,2.8,2.8" />
                <path className={classes.st2} d="M33.8,16.4c0,5.4-4.4,9.8-9.8,9.8s-9.8-4.4-9.8-9.8c0-0.8,0.1-1.6,0.3-2.4c2.9,1.2,6.1,1.8,9.5,1.8
                    s6.5-0.7,9.5-1.8C33.7,14.8,33.8,15.6,33.8,16.4z"/>
            </svg>
            {!isMobile &&
                <h3 className={classes.Logo_text}>
                    MeetZone
                </h3>
            }
        </div>
    )
}

export default MeetZone;
