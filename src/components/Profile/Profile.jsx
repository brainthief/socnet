import React from 'react'
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"

const Profile = (props) => {
 const profilePage = props.profilePage;
 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <div className={css.profImg}></div>
    <div>avt + description</div>
    <MyPosts profilePage={profilePage} />
   </div>
  </div >
 )
}

export default Profile