import React from 'react'
import FriendItem from './FriendItem/FriendItem'
import css from './Friends.module.css'

const Friends = (props) => {


 const { friends } = props

 return (
  <div className={css.container}>
   {friends.map((el) => <FriendItem key={el.id} friend={el} />)}
  </div>
 )
}

export default Friends