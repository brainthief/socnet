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
      {userList.map(el => <DialogItem name={el.name} id={el.id} />)}
     </div>
     <div className={css.messageList}>
      {chat.map(el => <Message author={el.author} msg={el.msg} me={el.me} />)}
     </div>
    </div>
   </div>
  </div>
 )
}

export default Dialogs