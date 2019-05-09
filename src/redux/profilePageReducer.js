export const ADD_COMMENT = 'SC/PROFILE_PAGE/ADD_COMMENT'
export const UPDATE_TEXT = 'SC/PROFILE_PAGE/UPDATE_TEXT'

const initialState = {
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
}

export const addCommentActionCreator = () => {
  return {
    type: ADD_COMMENT
  }
}

export const updateCommentTextActionCreator = (value) => {
  return {
    type: UPDATE_TEXT,
    value
  }
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      state.comments = [{ msg: state.newComment, likeCount: '0' }, ...state.comments]
      state.newComment = ''
      return state
    case UPDATE_TEXT:
      state.newComment = action.value
      return state
    default:
      return state
  }
}

export default profilePageReducer