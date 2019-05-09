
import profilePageReducer from './../redux/profilePageReducer'
import dialogPageReducer from './../redux/dialogPageReducer'
import sideBarReducer from './../redux/sideBarReducer'

export const ADD_COMMENT = 'SC/PROFILE_PAGE/ADD_COMMENT'
export const UPDATE_TEXT = 'SC/PROFILE_PAGE/UPDATE_TEXT'
export const ADD_MESSAGE = 'SC/DIALOG_PAGE/ADD_MESSAGE'
export const UPDATE_MESSAGE = 'SC/DIALOG_PAGE/UPDATE_MESSAGE'

const store = {
  _state: {
    profilePage: profilePageReducer(undefined, { type: 'init' }),
    dialogPage: dialogPageReducer(undefined, { type: 'init' }),
    sideBar: sideBarReducer(undefined, { type: 'init' })
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action)
    this._state.sideBar = sideBarReducer(this._state.sideBar, action)

    this._refresh();
  },
  _refresh() {
  },
  subscribe(func) {
    this._refresh = func
  }
}

// let render = () => { }

// export const setRender = (job) => {
//   render = job
// }

// export const addNewPost = () => {
//   store._state.profilePage.comments = [{ msg: store._state.profilePage.newComment, likeCount: '0' }, ...store._state.profilePage.comments]
//   store._state.profilePage.newComment = ''
//   render();
// }

// export const changeTextArea = (e) => {
//   store._state.profilePage.newComment = e.target.value
//   render();
// }

// export const changeMessageTextArea = (e) => {
//   store._state.dialogPage.newMessage = e.target.value
//   render();
// }

// export const addNewMessage = () => {
//   store._state.dialogPage.chat = [...store._state.dialogPage.chat, { id: store._state.dialogPage.chat.length + 1, author: 'Me', msg: store._state.dialogPage.newMessage, me: "1" }]
//   store._state.dialogPage.newMessage = ''
//   render();
// }

export default store