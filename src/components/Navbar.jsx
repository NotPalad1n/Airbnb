import React from 'react'

import Logo from "../images/logo.png"

import "../styling/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <img src={Logo} alt="logo" className="logo" />
        </div>
    </div>
  )
}

export default Navbar