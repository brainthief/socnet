import React from 'react'
import css from './FriendItem.module.css'

const FriendItem = (props) => {
 const { id, name, imgUrl } = props.friend
 return <div key={id} className={css.item}>
  <div key={1}><img className={css.img} src={require(`./../../../../img/avatars/${imgUrl}`)} alt={name} /></div>
  <div key={2}>{name}</div>

 </div>
}

export default FriendItem