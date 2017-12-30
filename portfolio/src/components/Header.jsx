import React from 'react';
import Design from './Design';
import Web from './Web';
import Home from './Home'
import { NavLink } from 'react-router-dom'



function Header(){

  return(
    <nav className="cd-stretchy-nav">
      <a className="cd-nav-trigger" href="#0">Menu<span aria-hidden="true"></span></a>
      <ul>
        <li>
          <NavLink exact to="/">Designs</NavLink>
        </li>
        <li>
          <NavLink exact to="/design">Designs</NavLink>
        </li>
        <li>
        <NavLink exact to="/web">Designs</NavLink>
        </li>
        <li>
        <NavLink exact to="/about">Designs</NavLink>
          </li>
      </ul>
      <span aria-hidden="true" className="stretchy-nav-bg"></span>
    </nav>
  )
}

export default Header;
