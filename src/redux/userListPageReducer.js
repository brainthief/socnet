import API from './../api/API'

export const statuses = {
  NOT_INITIALIZED: "NOT_INITIALIZED",
  ERROR: "ERROR",
  INPROGRESS: "INPROGRESS",
  SUCCESS: "SUCCESS",
};

const UPDATE_STATUS_INPROGRESS = "CB/TABLE/UPDATE_STATUS_INPROGRESS";
const UPDATE_STATUS_SUCCESS = "CB/TABLE/UPDATE_STATUS_SUCCESS";
const UPDATE_DATA = "CB/TABLE/UPDATE_DATA_FROM_AXIOS";

const initialState = {
  status: statuses.NOT_INITIALIZED,
  data: []
};

export const updateStatusInprogressActionCreator = () => {
  return {
    type: UPDATE_STATUS_INPROGRESS,
  };
};

export const updateStatusSuccessActionCreator = () => {
  return {
    type: UPDATE_STATUS_SUCCESS,
  };
};

export const updateDataActionCreator = value => {
  return {
    type: UPDATE_DATA,
    value,
  };
};

export const fetchTasksThunkCreator = (val) => {
  return (dispatch) => {
    dispatch(updateStatusInprogressActionCreator());
    API.getUsers().then(res => {
      res.data.error ? alert(res.data.error) : dispatch(updateDataActionCreator(res.data));
      res.data.error ? alert(res.data.error) : dispatch(updateStatusSuccessActionCreator());
    });
  }
}

const userListPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATUS_INPROGRESS:
      let newStateS = { ...state };
      newStateS.status = statuses.INPROGRESS;
      return newStateS;
    case UPDATE_STATUS_SUCCESS:
      let newStateSu = { ...state };
      newStateSu.status = statuses.SUCCESS;
      return newStateSu;
    case UPDATE_DATA:
      let newStateSa = { ...state };
      newStateSa.data = action.value;
      return newStateSa;
    default:
      return state;
  }
};

export default userListPageReducer