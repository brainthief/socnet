import React from 'react'
import css from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'
import { connect } from 'react-redux'

const Nav = (props) => {
 const { sideBar } = props
 return (
  <nav className={css.nav}>
   <div className={css.item}><NavLink to="/profile" activeClassName={css.active}>Profile</NavLink></div>
   <div className={css.item}><NavLink to="/dialogs" activeClassName={css.active}>Message</NavLink></div>
   <div className={css.item}><NavLink to="/news" activeClassName={css.active}>News</NavLink></div>
   <div className={css.item}><NavLink to="/music" activeClassName={css.active}>Music</NavLink></div>
   <div className={css.item}><NavLink to="/settings" activeClassName={css.active}>Settings</NavLink></div>
   <div className={css.item}><NavLink to="/user-list" activeClassName={css.active}>User List</NavLink></div>
   <Friends friends={sideBar.friends} />
  </nav>
 )
}

const mapStateToProps = (state) => {
 return {
  sideBar: state.sideBar
 }
}

const ConnectedNavBar = connect(mapStateToProps)(Nav)

export default ConnectedNavBar