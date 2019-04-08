import React from 'react'
import css from './Dialogs.module.css'

const Dialogs = () => {
 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <div className={css.dialogWrap}>
     <div className={css.peopleList}>
      <div>User 1</div>
      <div>User 2</div>
      <div>User 3</div>
      <div>User 4</div>
     </div>
     <div className={css.messageList}>
      <div className={css.msgMy}>
       <div className={css.author}>Me</div>
       <div className={css.msg}>Hi! How are you?</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>User 1:</div>
       <div className={css.msg}>It's ok. How are you?</div>
      </div>
      <div className={css.msgMy}>
       <div className={css.author}>Me</div>
       <div className={css.msg}>Hi! How are you?</div>
      </div>
      <div className={css.msgMy}>
       <div className={css.author}>Me</div>
       <div className={css.msg}>Hi! How are you?</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>User 1:</div>
       <div className={css.msg}>It's ok. How are you?</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>User 1:</div>
       <div className={css.msg}>It's ok. How are you?</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>User 1:</div>
       <div className={css.msg}>It's ok. How are you?</div>
      </div>
      <div className={css.msgOther}>
       <div className={css.author}>User 1:</div>
       <div className={css.msg}>It's ok. How are you?</div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Dialogs