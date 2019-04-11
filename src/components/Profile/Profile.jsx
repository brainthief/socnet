import React from 'react'
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts"

const Profile = (props) => {
 // const profilePage = props.profilePage;

 const profilePage = {
  title: 'My posts',
  comments: [
   ['all ok ;)', '5'],
   [':D', '0'],
   [':)', '10'],
   ['I am alone', '57'],
   ['How are you', '17'],
   [`Its 'my first post`, '7']
  ]
 }
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