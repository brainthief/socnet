import React from 'react'
import css from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import Message from './Message/Message'

const DialogItem = ({ name, id }) => {
 return <div><NavLink to={'/dialogs/' + id} activeClassName={css.active} >{name} </NavLink></div>
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