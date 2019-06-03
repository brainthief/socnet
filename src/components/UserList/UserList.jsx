import React from 'react'
import API from './../../api/API'
import { connect } from "react-redux";
import css from './UserList.module.css'
import {
  statuses,
  updateStatusInprogressActionCreator,
  updateStatusSuccessActionCreator,
  updateDataActionCreator
} from './../../redux/userListPageReducer.js'
import logo from './../../img/incognito.png'

class UserList extends React.Component {

  constructor(props) {
    super(props);

    // this.props.setData = this.props.setData.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
    API.getUsers().then(res => {
      // debugger
      res.data.error ? alert(res.data.error) : this.props.setData(res.data)
      res.data.error ? alert(res.data.error) : this.props.setSuccess()
    });


  }

  render() {
    // const { status, data } = this.props.userList
    // const { setInprogress, setSuccess, setData } = this.props



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
