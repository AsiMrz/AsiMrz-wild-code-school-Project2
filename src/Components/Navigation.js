import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return(
      <div>
         <NavLink to="/">Landing</NavLink>
         <NavLink to="/SatelliteStatus">SatelliteStatus</NavLink>
      </div>
  );  
}

export default Navigation;