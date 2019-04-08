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
    <Post message='all ok ;)' like='5' />
    <Post message=':D' like='0' />
    <Post message=':)' like='8' />
    <Post message='I am alone' like='51' />
    <Post message='How are you' like='15' />
    <Post message={`Its 'my first post`} like='51' />
   </div>
  </div>
 )
}

export default MyPosts
