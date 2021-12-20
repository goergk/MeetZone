import React from 'react';
import classes from '../../styles/Map.module.css';

interface Props {
    lat: number,
    lng: number,
    color: string
    path: string,
    type: string,
    creator: string,
    people: number,
    people_needed: number,
    id: number
}

const Marker: React.FC<Props> = ({
    lat,
    lng,
    color,
    path,
    type,
    creator,
    people,
    people_needed,
    id
}) => {

    const handleClick = (id: number) => {
        return console.log(`kliknieto id: ${id}`)
    }

    return (
        <div
            title={`${type} by ${creator}. People: ${people}/${people_needed}`}
            className={classes.Marker}
            onClick={(event) => handleClick(id)}
        >
            <svg>
                <path style={{ 'fill': `${color}`, 'transform': 'scale(1.15)' }} d={path} />
            </svg>
        </div>
    )
}

export default Marker;
