import React from 'react'
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
 const { profilePage } = props;

 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <ProfileInfo link={css.profImg} />
    <MyPosts profilePage={profilePage} addNewPost={props.addNewPost} changeTextArea={props.changeTextArea} />
   </div>
  </div >
 )
}

export default Profile

