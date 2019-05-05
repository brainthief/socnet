export const ADD_COMMENT = 'PROFILE/ADD_COMMENT'
export const UPDATE_TEXT = 'PROFILE/UPDATE_TEXT'
export const ADD_MESSAGE = 'DIALOGS/ADD_MESSAGE'
export const UPDATE_MESSAGE = 'DIALOGS/UPDATE_MESSAGE'

const store = {
  _state: {
    profilePage: {
      title: 'My posts',
      comments: [
        { msg: 'all ok ;)', likeCount: 5 },
        { msg: ':D', likeCount: 0 },
        { msg: ':)', likeCount: 10 },
        { msg: 'I am alone', likeCount: 57 },
        { msg: 'How are you', likeCount: 17 },
        { msg: `Its 'my first post`, likeCount: 7 }
      ],
      newComment: ""
    },
    dialogPage: {
      userList: [
        { id: '0', name: 'Vytas' },
        { id: '1', name: 'Vytautas' },
        { id: '2', name: 'Tomas' },
        { id: '3', name: 'Darius' },
        { id: '4', name: 'Kęstas' },
        { id: '5', name: 'Julius' },
      ],
      chat: [
        { id: "1", author: 'Me', msg: 'Hi! How are you?', me: "1" },
        { id: "2", author: 'User 1', msg: `It's ok. How are you?`, me: "0" },
        { id: "3", author: 'Me', msg: 'All right.', me: "1" },
        { id: "4", author: 'Me', msg: 'How was your day', me: "1" },
        { id: "5", author: 'User 1', msg: `All ok`, me: "0" },
        { id: "6", author: 'User 1', msg: `Work hard`, me: "0" },
        { id: "7", author: 'User 1', msg: `Came home`, me: "0" },
        { id: "8", author: 'User 1', msg: `Learning programing`, me: "0" },
      ],
      newMessage: ""
    },
    sideBar: {
      friends: [
        { id: 0, name: "Vaida", imgUrl: "vaida.JPG" },
        { id: 1, name: "Viltė", imgUrl: "vilte.JPG" },
        { id: 2, name: "Vinksė", imgUrl: "vinkse.JPG" },
      ]
    }
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_COMMENT:
        this._state.profilePage.comments = [{ msg: this._state.profilePage.newComment, likeCount: '0' }, ...this._state.profilePage.comments]
        this._state.profilePage.newComment = ''
        this._refresh()
        break;
      case UPDATE_TEXT:
        this._state.profilePage.newComment = action.value
        this._refresh()
        break
      case ADD_MESSAGE:
        this._state.dialogPage.chat = [...this._state.dialogPage.chat, { id: this._state.dialogPage.chat.length + 1, author: 'Me', msg: this._state.dialogPage.newMessage, me: "1" }]
        this._state.dialogPage.newMessage = ''
        this._refresh();
        break
      case UPDATE_MESSAGE:
        this._state.dialogPage.newMessage = action.value
        this._refresh()
        break
      default:
        break;
    }
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