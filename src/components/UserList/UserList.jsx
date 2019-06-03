import React from 'react'
import * as axios from "axios";
import { connect } from "react-redux";
import css from './UserList.module.css'
import {
  statuses,
  updateStatusInprogressActionCreator,
  updateStatusSuccessActionCreator,
  updateDataActionCreator
} from './../../redux/userListPageReducer.js'
import logo from './../../img/incognito.png'

const UserList = (props) => {
  const { status, data } = props.userList
  const { setInprogress, setSuccess, setData } = props
  console.log(data)

  if (status === statuses.NOT_INITIALIZED) {
    setInprogress();
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {

      res.data.error ? alert(res.data.error) : setData(res.data)
      res.data.error ? alert(res.data.error) : setSuccess()
    });

  }

  return <div className={css.contentText}>
    User List
    {status === statuses.SUCCESS ? data.items.map(el => <div key={el.id}>
      <hr />
      <p>{el.id} - {el.name}</p>
      <p>
        <img className={css.img} src={el.photos.small ? el.photos.small : logo} />
      </p>

    </div>)

      : null}
  </div>
}


const mapStateToProps = state => {
  return {
    userList: state.userList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInprogress: () => {
      dispatch(updateStatusInprogressActionCreator());
    },
    setSuccess: () => {
      dispatch(updateStatusSuccessActionCreator());
    },
    setData: val => {
      dispatch(updateDataActionCreator(val));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
