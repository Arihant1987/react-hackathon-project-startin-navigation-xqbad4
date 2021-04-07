import React from 'react';
import { BrowsertRouter as Router, NavLink } from 'react-router-dom';

function Navbar() {

  return(
    <div class="navbar-container">
      <ul>
        <li>
          <NavLink exact to="/buy" activeStyle={{color: '#0fe'}}>Buy</NavLink>
        </li>
        <li>
          <NavLink exact to="/sell" activeStyle={{color: '#0fe'}}>Sell</NavLink>
        </li>  
        <li>
          <NavLink exact to="/report" activeStyle={{color: '#0fe'}}>Insights</NavLink>
        </li>
        <li>
          <NavLink exact to="/trading" activeStyle={{color: '#0fe'}}>Trading</NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeStyle={{color: '#0fe'}}>Logout</NavLink>
        </li>  
      </ul>
    </div>
  );
}

export default Navbar;