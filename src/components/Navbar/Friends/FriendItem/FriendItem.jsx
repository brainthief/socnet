import React from 'react'

const FriendItem = (props) => {
 const { id, name, imgUrl } = props.friend
 return <div>{id + name + imgUrl}</div>
}

export default FriendItem