import React, {Component} from 'react';
import Satellite from './Satellite';

class SatelliteContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          locationSatellite: {
            longitude: 100,
            latitude: 50,
          },
        };
        //fetch api
        this.updateLocation();

        this.handleClick = this.handleClick.bind(this);
    }

    updateLocation() {
        fetch('http://api.open-notify.org/iss-now.json')
          .then(response => response.json())
          .then(data =>
            this.setState({
              locationSatellite: data.iss_position,
            }),
          )
          .catch(() => alert('error'));
    }

    handleClick() {
      this.updateLocation();
    }

    render() {
        return (
          <div>
            <h1>Current Status</h1>
            <Satellite
                handleClick={this.handleClick}
                location= {this.state.locationSatellite}
                />
          </div>
        );
    }
}

export default SatelliteContainer;
