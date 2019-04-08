import React from 'react'
import css from './Post.module.css'
import logo from './../../../../img/logomsg.png'

const Posts = (props) => {
  return (
    <div className={css.post}>
      <img className={css.img} src={logo} alt="a" /> {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>

  )
}

export default Posts
