import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import classes from '../../styles/Map.module.css';
import { RootObject } from '../../services/EventsApi';
import { PathType } from './PathType';
import Marker from '../icons/Marker';
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCenter, setZoom } from '../../features/center';
interface Props {
  data: RootObject | undefined;
}

const Map: React.FC<Props> = ({ data }) => {
  const events = data?.events;
  const { center, zoom } = useSelector((state: RootState) => state.Center);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCenter({ lat: 51.107, lng: 17.04 }));
    dispatch(setZoom(14));
  }, [events])

  return (
    <div className={classes.Map_container} id={center.toString()}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBveP566wgvbJ8Iv9mftPU1jVMtF5tSYSw' }}
        defaultCenter={{ lat: 51.107, lng: 17.04 }}
        center={center}
        defaultZoom={14}
        zoom={zoom}
        margin={[50, 50, 50, 50]}
        // onChange={}
        // onChildClick={}
        options={{
          backgroundColor: "#282C35",
          styles: [
            { elementType: "geometry", stylers: [{ color: "#282C35" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: '#242f3e' }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#E4AD38" }],
            },
            {
              featureType: "transit",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }]
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                { visibility: "off" }
              ]
            },
            {
              featureType: "poi",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#191919" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#191919" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ]
        }}
      >
        {
          events?.map(event => {
            let color = "";
            let path = "";

            if (event.type === "Basketball") {
              color = "#dd7e01";
              path = PathType.BASKETBALL
            } else if (event.type === "Volleyball") {
              color = "#2160d4";
              path = PathType.VOLLEYBALL
            } else if (event.type === "Football") {
              color = "#30bf1c";
              path = PathType.FOOTBALL
            } else if (event.type === "Chess") {
              color = "#a88253";
              path = PathType.CHESS
            } else if (event.type === "Tennis") {
              color = "#ceff19";
              path = PathType.TENNIS
            }
            return (
              <Marker
                lat={Number(event.lat)}
                lng={Number(event.lng)}
                color={color}
                path={path}
                type={event.type}
                creator={event.creator.username}
                people={event.number_of_people}
                people_needed={event.people_needed}
                id={event.id}
              />)
          })
        }
      </GoogleMapReact>
    </div>
  )
}

export default Map;
