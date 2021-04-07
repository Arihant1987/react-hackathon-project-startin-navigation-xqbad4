import React, { useState } from "react";
import { MdClose, MdExpandMore, MdExpandLess } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { NavLink } from 'react-router-dom';

function Landing() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [accountListOpen, setAccountListOpen] = useState(false);

  const toggleAccountList = () => {
    setAccountListOpen(prev => !prev);
  }

  const toggleNavigation = () => {
    setNavbarOpen(prev => !prev);
  }
  return(
    <div>
      <nav className="navBar">
        <button onClick={toggleNavigation}>
        {navbarOpen ? (<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />):
        (<FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />)}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <NavLink exact to="/buy" activeStyle={{color: '#0fe'}}>Buy</NavLink>
          </li>
          <li>
            <NavLink exact to="/sell" activeStyle={{color: '#0fe'}}>Sell</NavLink>
          </li>  
          <li>
            <NavLink exact to="/insights" activeStyle={{color: '#0fe'}}>Insights</NavLink>
          </li>
          <li>
            <NavLink exact to="/trading" activeStyle={{color: '#0fe'}}>Trading</NavLink>
          </li>
          <li>
            <span onClick={toggleAccountList} class="list-item-title">Account</span>
            <span style={{verticalAlign: "middle"}}>
              {accountListOpen ? <MdExpandLess style={{ color: "#fff", width: "40px", height: "40px" }} /> : 
              <MdExpandMore style={{ color: "#fff", width: "40px", height: "40px" }}/> }
            </span>
            <ul class={`sublist ${accountListOpen ? " show" : ""}`}>
              <li>
                <NavLink exact to="/portfolio" activeStyle={{color: '#0fe'}}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink exact to="/reports" activeStyle={{color: '#0fe'}}>Reports</NavLink>
              </li>
              <li>
                <NavLink exact to="/funds" activeStyle={{color: '#0fe'}}>Funds</NavLink>
              </li>
            </ul>
            
          </li>
          <li>
            <NavLink exact to="/" activeStyle={{color: '#0fe'}}>Logout</NavLink>
          </li>  
        </ul>
      </nav>
    </div>
  )
}

export default Landing;