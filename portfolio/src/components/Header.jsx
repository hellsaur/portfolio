import React from 'react'



function Header(props){

  return(
    <nav className="cd-stretchy-nav">
      <a class="cd-nav-trigger" href="#0">Menu<span aria-hidden="true"></span></a>
      <ul>
        <li><a href="#design">Designs</a>
        </li>
        <li><a href="#web">Web Dev</a>
        </li>
        <li><a href="#resume">Resume</a>
        </li>
      </ul>
      <span aria-hidden="true" className="stretchy-nav-bg"></span>
    </nav>
  )
}

export default Header;
