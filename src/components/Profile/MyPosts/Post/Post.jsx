import React from 'react'
import css from './Post.module.css'
import logo from './../../../../img/logomsg.png'
import PropTypes from 'prop-types'

const Post = (props) => {
  const { message } = props
  return (
    <div className={css.post}>
      <img className={css.img} src={logo} alt="a" /> {message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>

  )
}

export default Post

Post.propTypes = {
  message: PropTypes.string,
  like: PropTypes.number
}
