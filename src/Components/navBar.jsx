import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
 
  return (
    <nav>
      <div className="side-links">
        <Link to="/about"><h2>About</h2></Link>
        <Link to="/"><h2>Crown Zenith Deck</h2></Link>            
      </div>
    </nav>
  )
}

export default NavBar;