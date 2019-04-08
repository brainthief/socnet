import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
 return (
  <div className={css.myPosts}><div className={css.title}>My posts</div>
   <div> New post
    <div>
     <textarea></textarea>
     <button>Add posts</button>
    </div>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
   </div>
  </div>
 )
}

export default MyPosts
