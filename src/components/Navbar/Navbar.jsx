import React from 'react'
import css from './Navbar.module.css'

const Nav = () => {
 return (
  <nav className={css.nav}>
   <div className={css.item}>Profile</div>
   <div className={`${css.item} ${css.active}`}>Message</div>
   <div className={css.item}>News</div>
   <div className={css.item}>Music</div>
   <div className={css.item}>Settings</div>
  </nav>
 )
}

export default Nav