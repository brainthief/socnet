export const statuses = {
 NOT_INITIALIZED: "NOT_INITIALIZED",
 ERROR: "ERROR",
 INPROGRESS: "INPROGRESS",
 SUCCESS: "SUCCESS",
};

const UPDATE_SEARCH_NAME = "CB/SEARCH_FORM/UPDATE_MESSAGE";
const UPDATE_SEARCH_PHONE = "CB/SEARCH_FORM/UPDATE_PHONE";
const UPDATE_STATUS_INPROGRESS = "CB/TABLE/UPDATE_STATUS_INPROGRESS";
const UPDATE_STATUS_SUCCESS = "CB/TABLE/UPDATE_STATUS_SUCCESS";
const UPDATE_DATA = "CB/TABLE/UPDATE_DATA_FROM_AXIOS";
const DELETE_ROW = "CB/TABLE/DELETE_ROW"
const SELECT_EDIT = "CB/TABLE/SELECT_ON_CLICK"
const UPDATE_EDIT_NAME = "CB/TABLE/UPDATE_EDIT_NAME"
const UPDATE_EDIT_PHONE = "CB/TABLE/UPDATE_EDIT_PRONE"

const initialState = {
 status: statuses.NOT_INITIALIZED,
 data: []
};

const userListPageReducer = (state = initialState, action) => {
 switch (action.type) {
  case UPDATE_SEARCH_NAME:
   let newState = { ...state };
   return newState;
  default:
   return state;
 }
};

export default userListPageReducer