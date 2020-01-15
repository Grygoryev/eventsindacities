import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav className="nav-wrppaer blue lighten-1">
      <div className="container">
        <a href='/' className="brand-logo">События в городе</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)