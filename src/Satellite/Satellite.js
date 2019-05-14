
import React from 'react';

const Satellite = (props) => {
    console.log(props);
    return (
      <div>
        <button onClick={props.handleClick}>Update Location</button>
        <p>
          Longitude: {props.location.longitude}
          Latitude: {props.location.latitude}
        </p>
      </div>
    );
}

export default Satellite;
