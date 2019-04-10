import React from 'react'
import css from './Dialogs.module.css'

const Dialogs = (props) => {
 const { userList, chat } = props.dialogPage;
 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <div className={css.dialogWrap}>
     <div className={css.peopleList}>
      <div className={css.active}>{userList[0]}</div>
      <div>{userList[1]}</div>
      <div>{userList[2]}</div>
      <div>{userList[3]}</div>
     </div>
     <div className={css.messageList}>
      <div className={css.msgMy}>
       <div className={css.author}>{chat[0][0]}</div>
       <div className={css.msg}>{chat[0][1]}</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>{chat[1][0]}:</div>
       <div className={css.msg}>{chat[1][1]}</div>
      </div>
      <div className={css.msgMy}>
       <div className={css.author}>{chat[2][0]}</div>
       <div className={css.msg}>{chat[2][1]}</div>
      </div>
      <div className={css.msgMy}>
       <div className={css.author}>{chat[3][0]}</div>
       <div className={css.msg}>{chat[3][1]}</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>{chat[4][0]}:</div>
       <div className={css.msg}>{chat[4][1]}</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>{chat[5][0]}:</div>
       <div className={css.msg}>{chat[5][1]}</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>{chat[6][0]}:</div>
       <div className={css.msg}>{chat[6][1]}</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>{chat[7][0]}:</div>
       <div className={css.msg}>{chat[7][1]}</div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Dialogs