import React from 'react'
import logo from './../img/logo.png'
import css from './Header.module.css'

const Header = () => {
 return (
  <header className={css.header}>
   <div className={css.logo}><img src={logo} alt="logo" /></div>

   <div className={css.mainText}>SOCNET - Feel Free</div>
  </header>
 )
}

export default Header