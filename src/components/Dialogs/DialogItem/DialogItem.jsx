import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import css from './DialogItem.module.css'

const DialogItem = ({ name, id }) => {
 return <div><NavLink to={'/dialogs/' + id} activeClassName={css.active} >{name} </NavLink></div>
}

export default DialogItem

DialogItem.propTypes = {
 name: PropTypes.string,
 id: PropTypes.string
}
