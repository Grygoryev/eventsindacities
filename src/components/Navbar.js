import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav className="nav-wrppaer purple">
      <div className="container">
        <a href='/' className="brand-logo">what's around</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)