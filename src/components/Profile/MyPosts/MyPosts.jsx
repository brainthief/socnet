import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
 const { comments, title } = props.profilePage
 return (
  <div className={css.myPosts}><div className={css.title}>{title}</div>
   <div> New post
    <div>
     <textarea></textarea>
     <button>Add posts</button>
    </div>
    <Post message={comments[0].msg} like={comments[0].likeCount} />
    <Post message={comments[1].msg} like={comments[1].likeCount} />
    <Post message={comments[2].msg} like={comments[2].likeCount} />
    <Post message={comments[3].msg} like={comments[3].likeCount} />
    <Post message={comments[4].msg} like={comments[4].likeCount} />
    <Post message={comments[5].msg} like={comments[5].likeCount} />
   </div>
  </div>
 )
}

export default MyPosts
