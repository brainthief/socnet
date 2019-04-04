import React from 'react'
import logo from './../img/logo.png'

const Header = () => {
 return (
  <header className="header">
   <div className="logo"><img src={logo} alt="logo" /></div>

   <div className="mainText">SOCNET - Feel Free</div>
  </header>
 )
}

export default Header