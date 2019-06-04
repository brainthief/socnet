import React from 'react'
import { connect } from "react-redux";
import css from './UserList.module.css'
import {
  statuses,
  fetchTasksThunkCreator
} from './../../redux/userListPageReducer.js'
import logo from './../../img/incognito.png'

class UserList extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchTask();
  }

  render() {

    // if (status === statuses.NOT_INITIALIZED) {
    //   setInprogress();
    //   API.getUsers().then(res => {
    //     res.data.error ? alert(res.data.error) : setData(res.data)
    //     res.data.error ? alert(res.data.error) : setSuccess()
    //   });

    // }

    return <div className={css.contentText}>
      User List
    {this.props.userList.status === statuses.SUCCESS ? this.props.userList.data.items.map(el => <div key={el.id}>
        <hr />
        <p>{el.id} - {el.name}</p>
        <p>
          <img className={css.img} src={el.photos.small ? el.photos.small : logo} />
        </p>

      </div>)

        : null}
    </div>
  }
}


const mapStateToProps = state => {
  return {
    userList: state.userList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTask: () => {
      dispatch(fetchTasksThunkCreator())
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);