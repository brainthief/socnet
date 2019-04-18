import React from 'react'
import css from './Message.module.css'

const Message = ({ author, msg, me }) => {
 return <div className={me === '1' ? css.msgMy : css.msgOther}>
  <div className={css.author}>{author}</div>
  <div className={css.msg}>{msg}</div>
 </div>
}

export default Message