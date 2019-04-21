import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
 const { comments, title, newComment } = props.profilePage
 return (
  <div className={css.myPosts}><div className={css.title}>{title}</div>
   <div> New post
    <div>
     <textarea onChange={(e) => { props.changeTextArea(e) }} value={newComment}></textarea>
     <button onClick={() => { props.addNewPost() }} disabled={newComment.length <= 0 ? true : false}>Add posts</button>
    </div>
    {comments.map((el, index) => <Post key={index} message={el.msg} like={el.likeCount} />)}
   </div>
  </div>
 )
}

export default MyPosts