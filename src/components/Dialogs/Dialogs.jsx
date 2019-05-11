import React from 'react'
import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateMessageActionCreator } from './../../redux/dialogPageReducer'
import { connect } from 'react-redux'

const Dialogs = (props) => {
 const { userList, chat, newMessage } = props.dialogPage;
 const { addMessage, updateMessage } = props

 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <div className={css.dialogWrap}>
     <div className={css.peopleList}>
      {userList.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)}
     </div>
     <div className={css.messageList}>
      {chat.map(el => <Message key={el.id} author={el.author} msg={el.msg} me={el.me} />)}
      <div>
       <textarea rows="2" autoFocus className={css.textarea} onChange={(e) => { updateMessage(e) }} value={newMessage}></textarea>
      </div>
      < div >
       <button className={css.button} onClick={() => { addMessage() }} disabled={newMessage.length <= 1 ? true : false}>Send message</button>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  dialogPage: state.dialogPage
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  addMessage: () => { dispatch(addMessageActionCreator()) },
  updateMessage: (e) => { dispatch(updateMessageActionCreator(e.target.value)) }
 }
}

const ConnectedDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default ConnectedDialogs
