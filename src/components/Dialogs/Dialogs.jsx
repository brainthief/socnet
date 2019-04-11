import React from 'react'
import css from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
 // const { userList, chat } = props.dialogPage;

 const userList = ['Vytautas', 'Timas', 'Darius', 'Jonas', 'Kęstas']
 const chat = [
  ['Me', 'Hi! How are you?'],
  ['User 1', `It's ok. How are you?`],
  ['Me', 'All right.'],
  ['Me', 'How was your day'],
  ['User 1', `All ok`],
  ['User 1', `Work hard`],
  ['User 1', `Came home`],
  ['User 1', `Learning programing`],
 ];
 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <div className={css.dialogWrap}>
     <div className={css.peopleList}>
      <div><NavLink to='/dialogs/0' activeClassName={css.active} >{userList[0]} </NavLink></div>
      <div><NavLink to='/dialogs/1' activeClassName={css.active} >{userList[1]} </NavLink></div>
      <div><NavLink to='/dialogs/2' activeClassName={css.active} >{userList[2]} </NavLink></div>
      <div><NavLink to='/dialogs/3' activeClassName={css.active} >{userList[3]} </NavLink></div>
      <div><NavLink to='/dialogs/4' activeClassName={css.active} >{userList[4]} </NavLink></div>
      <div><NavLink to='/dialogs/5' activeClassName={css.active} >{userList[5]} </NavLink></div>
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