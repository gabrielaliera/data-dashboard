import { useState } from 'react'
import NavBar from "./navBar"


const Header = () => {

  return (
    <div className='Header'>
        <h1>Pokemon Card TCG Search</h1>
        <NavBar/>     
    </div>
  )
}

export default Header