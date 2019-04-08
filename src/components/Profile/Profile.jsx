import React from 'react'
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <div className={css.profImg}></div>
    <div>avt + description</div>
    <MyPosts />
   </div>
  </div >
 )
}

export default Profile