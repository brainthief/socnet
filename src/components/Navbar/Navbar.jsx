import React from 'react'
import css from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
 return (
  <nav className={css.nav}>
   <div className={css.item}><NavLink to="/profile" className={css.item} activeClassName={css.active}>Profile</NavLink></div>
   <div className={`${css.item} ${css.active}`}><NavLink to="/dialogs" activeClassName={css.active}>Message</NavLink></div>
   <div className={css.item}><NavLink to="/news" activeClassName={css.active}>News</NavLink></div>
   <div className={css.item}><NavLink to="/music" activeClassName={css.active}>Music</NavLink></div>
   <div className={css.item}><NavLink to="/settings" activeClassName={css.active}>Settings</NavLink></div>
  </nav>
 )
}

export default Nav