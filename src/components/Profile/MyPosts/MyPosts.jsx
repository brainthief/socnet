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
    <Post message={comments[0][0]} like={comments[0][1]} />
    <Post message={comments[1][0]} like={comments[1][1]} />
    <Post message={comments[2][0]} like={comments[2][1]} />
    <Post message={comments[3][0]} like={comments[3][1]} />
    <Post message={comments[4][0]} like={comments[4][1]} />
    <Post message={comments[5][0]} like={comments[5][1]} />
   </div>
  </div>
 )
}

export default MyPosts
