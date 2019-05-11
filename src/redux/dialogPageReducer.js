export const ADD_MESSAGE = 'SC/DIALOG_PAGE/ADD_MESSAGE'
export const UPDATE_MESSAGE = 'SC/DIALOG_PAGE/UPDATE_MESSAGE'

const initialState = {
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
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateMessageActionCreator = (value) => {
  return {
    type: UPDATE_MESSAGE,
    value
  }
}

const dialogPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newState = { ...state }
      newState.chat = [...newState.chat, { id: newState.chat.length + 1, author: 'Me', msg: newState.newMessage, me: "1" }]
      newState.newMessage = ''
      return newState
    case UPDATE_MESSAGE:
      newState = { ...state }
      newState.newMessage = action.value
      return newState
    default:
      return state
  }
}

export default dialogPageReducer