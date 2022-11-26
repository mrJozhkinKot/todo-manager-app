import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
 return (
  <div className="header">
   <h1 className="header_title">TODO MANAGER</h1>
   <div className="header_menu">
    <NavLink to="/">Projects</NavLink>
    <NavLink to="/tasks">Tasks</NavLink>
   </div>
  </div>
 );
};

export default Header;
