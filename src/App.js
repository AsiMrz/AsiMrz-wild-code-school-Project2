import React, { Component } from 'react';
import './App.css';





import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing';
import SatelliteStatus from './Components/SatelliteStatus';

import BSnavbar from "./Navbar/BSnavbar";
import "bootstrap/dist/css/bootstrap.css";

import Satellite from "./Satellite/Satellite";


// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       data: null,
//     };
//   }
//
//   componentDidMount() {
//     fetch('https://api.mydomain.com')
//       .then(response => response.json())
//       .then(data => this.setState({ data }));
//   }
// render() {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.username}>
//           {item.username}: {item.name}
//         </li>
//       ))}
//     </ul>
//   );
// }
// }



function App() {
  return (

    <BrowserRouter>
      <div>
      <BSnavbar />
      <Switch>
        <Route path="/home" component={Landing} />
        <Route path="/satellite-status" component={SatelliteStatus} />
      </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
