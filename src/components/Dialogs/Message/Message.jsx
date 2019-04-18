import React from 'react'
import css from './Message.module.css'
import PropTypes from 'prop-types'

const Message = ({ author, msg, me }) => {
 return <div className={me === '1' ? css.msgMy : css.msgOther}>
  <div className={css.author}>{author}</div>
  <div className={css.msg}>{msg}</div>
 </div>
}

export default Message

Message.propTypes = {
 author: PropTypes.string,
 msg: PropTypes.string,
 me: PropTypes.string
}