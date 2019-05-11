import React from 'react'
import css from './MyPosts.module.css'
import Post from './Post/Post';
import { addCommentActionCreator, updateCommentTextActionCreator } from './../../../redux/profilePageReducer'
import { connect } from 'react-redux'

const MyPosts = (props) => {
 const { comments, title, newComment } = props.profilePage
 // let dispatch = props.dispatch
 const { addMessage, updateMessage } = props
 return (
  <div className={css.myPosts}><div className={css.title}>{title}</div>
   <div> New post
    <div>
     <textarea className={css.textarea} rows="1" onChange={(e) => { updateMessage(e) }} value={newComment}></textarea>
    </div>
    <div>
     <button className={css.button} onClick={() => { addMessage() }} disabled={newComment.length <= 0 ? true : false}>Add posts</button>
    </div>
    <div className={css.comments}>
     {comments.map((el, index) => <Post key={index} message={el.msg} like={el.likeCount} />)}
    </div>
   </div>
  </div>
 )
}

const mapStateToProps = (state) => {
 return {
  profilePage: state.profilePage
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  addMessage: () => { dispatch(addCommentActionCreator()) },
  updateMessage: (e) => { dispatch(updateCommentTextActionCreator(e.target.value)) }
 }
}

const ConnectedMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ConnectedMyPosts