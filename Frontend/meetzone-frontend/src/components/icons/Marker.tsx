import React from 'react';

interface Props {
    lat: number,
    lng: number,
    color: string
    path: string,
}

const Marker: React.FC<Props> = ({ lat, lng, color, path }) => {
    return (
        <svg>
            <path style={{ 'fill': `${color}`, 'transform': 'scale(1.15)' }} d={path} />
        </svg>
    )
}

export default Marker;
