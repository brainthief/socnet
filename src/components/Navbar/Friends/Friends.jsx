import React from 'react'
import FriendItem from './FriendItem/FriendItem'

const Friends = (props) => {


 const { friends } = props

 return (
  <div>
   {friends.map((el) => <FriendItem friend={el} />)}
  </div>
 )
}

export default Friends