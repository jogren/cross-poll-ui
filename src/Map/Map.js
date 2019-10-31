import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';

const Map = ({ selectCenter }) => {
  const [lat, updateLat] = useState(39.7392);
  const [lng, updateLng] = useState(-104.9903);
  const [zoom, updateZoom] = useState(13);
  const [centers, setCenters] = useState([])

  return (
    <div className="Map_container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyALUB8zfqw0qQveLHNvUcrwPpjarP4laIE' }}
        defaultCenter={{
          lat,
          lng
        }}
        defaultZoom={zoom}
      >
        {/* { centersList } */}
      </GoogleMapReact>
    </div>
  )
}

export default Map;
