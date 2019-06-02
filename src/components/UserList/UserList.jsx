import React from 'react'
import { connect } from "react-redux";
import css from './UserList.module.css'



const UserList = (props) => {
 const { data, status } = props.userList
 return <div className={css.contentText}>
  User List
 </div>
}


const mapStateToProps = state => {
 return {
  userList: state.userList,
 };
};

const mapDispatchToProps = dispatch => {
 return {
  // setInprogress: () => {
  //  dispatch(updateStatusInprogressActionCreator());
  // },
  // setSuccess: () => {
  //  dispatch(updateStatusSuccessActionCreator());
  // },
  // setData: val => {
  //  dispatch(updateDataActionCreator(val));
  // }
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
