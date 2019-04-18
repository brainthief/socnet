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
    {comments.map(el => <Post key={el.id} message={el.msg} like={el.likeCount} />)}
   </div>
  </div>
 )
}

export default MyPosts