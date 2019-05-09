import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post';
import { addCommentActionCreator, updateCommentTextActionCreator } from './../../../redux/profilePageReducer'

const MyPosts = (props) => {
 const { comments, title, newComment } = props.profilePage
 let dispatch = props.dispatch
 return (
  <div className={css.myPosts}><div className={css.title}>{title}</div>
   <div> New post
    <div>
     <textarea className={css.textarea} rows="1" onChange={(e) => { dispatch(updateCommentTextActionCreator(e.target.value)) }} value={newComment}></textarea>
    </div>
    <div>
     <button className={css.button} onClick={() => { dispatch(addCommentActionCreator()) }} disabled={newComment.length <= 0 ? true : false}>Add posts</button>
    </div>
    <div className={css.comments}>
     {comments.map((el, index) => <Post key={index} message={el.msg} like={el.likeCount} />)}
    </div>
   </div>
  </div>
 )
}

export default MyPosts