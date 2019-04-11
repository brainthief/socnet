import React from 'react'
import css from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = ({ name, id }) => {
 return <div><NavLink to={'/dialogs/' + id} activeClassName={css.active} >{name} </NavLink></div>
}

const Message = ({ author, msg, me }) => {
 return <div className={me === 1 ? css.msgMy : css.msgOther}>
  <div className={css.author}>{author}</div>
  <div className={css.msg}>{msg}</div>
 </div>
}

const Dialogs = (props) => {
 const { userList, chat } = props.dialogPage;
 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <div className={css.dialogWrap}>
     <div className={css.peopleList}>
      <DialogItem name={userList[0]} id="0" />
      <DialogItem name={userList[1]} id="1" />
      <DialogItem name={userList[2]} id="2" />
      <DialogItem name={userList[3]} id="3" />
      <DialogItem name={userList[4]} id="4" />
      <DialogItem name={userList[5]} id="5" />
     </div>
     <div className={css.messageList}>
      <Message author={chat[0][0]} msg={chat[0][1]} me="1" />
      <Message author={chat[1][0]} msg={chat[1][1]} me="0" />
      <Message author={chat[2][0]} msg={chat[2][1]} me="1" />
      <Message author={chat[3][0]} msg={chat[3][1]} me="1" />
      <Message author={chat[4][0]} msg={chat[4][1]} me="0" />
      <Message author={chat[5][0]} msg={chat[5][1]} me="0" />
      <Message author={chat[6][0]} msg={chat[6][1]} me="0" />
      <Message author={chat[7][0]} msg={chat[7][1]} me="0" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Dialogs