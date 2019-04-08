import React from 'react'
import css from './Profile.module.css'

const Profile = () => {
 return (
  <div className={css.content}>
   <div className={css.contentText}>
    <div className={css.profImg}></div>
    <div>avt + description</div>
    <div>My posts
            <div>New post
              <div>post 1</div>
      <div>post 2</div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Profile