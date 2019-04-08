import React from 'react'
import css from './Post.module.css'
import logo from './../../../../img/logomsg.png'

const Posts = () => {
  return (
    <div className={css.post}>
      <img className={css.img} src={logo} alt="a" /> post 1
      <span>Like</span>
    </div>
  )
}

export default Posts
