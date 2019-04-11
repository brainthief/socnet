import React from 'react'
import css from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = ({ name, id }) => {
 return <div><NavLink to={'/dialogs/' + id} activeClassName={css.active} >{name} </NavLink></div>
}

const Message = ({ author, msg, me }) => {
 return <div className={me === '1' ? css.msgMy : css.msgOther}>
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


      <DialogItem name={userList[0].name} id={userList[0].id} />
      <DialogItem name={userList[1].name} id={userList[1].id} />
      <DialogItem name={userList[2].name} id={userList[2].id} />
      <DialogItem name={userList[3].name} id={userList[3].id} />
      <DialogItem name={userList[4].name} id={userList[4].id} />
      <DialogItem name={userList[5].name} id={userList[5].id} />
     </div>
     <div className={css.messageList}>
      <Message author={chat[0].author} msg={chat[0].msg} me="1" />
      <Message author={chat[1].author} msg={chat[1].msg} me="0" />
      <Message author={chat[2].author} msg={chat[2].msg} me="1" />
      <Message author={chat[3].author} msg={chat[3].msg} me="1" />
      <Message author={chat[4].author} msg={chat[4].msg} me="0" />
      <Message author={chat[5].author} msg={chat[5].msg} me="0" />
      <Message author={chat[6].author} msg={chat[6].msg} me="0" />
      <Message author={chat[7].author} msg={chat[7].msg} me="0" />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Dialogs