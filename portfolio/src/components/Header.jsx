import React from 'react';
import { NavLink } from 'react-router-dom'



function Header(){

  return(
    <nav className="cd-stretchy-nav">
      <a className="cd-nav-trigger" href="#0">Menu<span aria-hidden="true"></span></a>
      <ul>
        <li>
          <NavLink id="nav-text" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink id="nav-text" exact to="/design">Designs</NavLink>
        </li>
        <li>
        <NavLink id="nav-text" exact to="/web">WebDev</NavLink>
        </li>
        <li>
        <NavLink id="nav-text" exact to="/about">About</NavLink>
          </li>
      </ul>
      <span aria-hidden="true" className="stretchy-nav-bg"></span>
    </nav>
  )
}

export default Header;
