import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <NavLink className="nav-link" to="/accordion">Accordion</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/search">Search</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/dropdown">Dropdown</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/translate">Translate</NavLink>
    </li>
  </ul>
</div>
</nav>
    </> );
}
 
export default NavBar;