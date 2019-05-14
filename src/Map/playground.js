this.state = {
  lat: 47.2701114,
  lng: 5.8663153,
  zoom: 5,
  maxNativeZoom: 18,


 <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} />
            <Route path="/SatelliteStatus" component={SatelliteStatus} />
          </div>
        </BrowserRouter>
        <div>
          <Map />
        </div>
      </div>



// const Wrapper = styled.div`
//     width: ${props => props.width};
//     height: ${props => props.height};
// `;

export default class Map extends React.Component {
    componentDidMount(){
        this.map = L.map('map', {
            center: [58 ,16],
            zoom: 20,
            zoomControl: false,
        });
        L.tyleLayer('https://cartodb-basemaps-{$}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);
    }
    render(
        return <Wrapper width="1280px" height="720px" id="map" />
    )
}

"https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png
//3
import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// const Wrapper = styled.div`
//     width: ${props => props.width};
//     height: ${props => props.height};
// `;

export default class Map extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        map:  ''
      }
    }
    componentDidMount(){
        this.map = L.map('map', {
            center: [58 ,16],
            zoom: 6,
            zoomControl: false,
        });
        L.tyleLayer('https://cartodb-basemaps-{$}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);
    }
    render(){
        return <div width="1280px" height="720px" id="map" />
    }
}


//4


//import { render } from 'react-dom';
//import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// import Landing from './Components/Landing';
// import SatelliteStatus from './Components/SatelliteStatus';






// class App extends Component {
//   render(){
//     return (

//         <div>
//           <Map />
//         </div>


//     );
//   }
// }

export default App;
