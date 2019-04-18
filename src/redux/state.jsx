export const state = {
 profilePage: {
  title: 'My posts',
  comments: [
   { id: "1", msg: 'all ok ;)', likeCount: '5' },
   { id: "2", msg: ':D', likeCount: '0' },
   { id: "3", msg: ':)', likeCount: '10' },
   { id: "4", msg: 'I am alone', likeCount: '57' },
   { id: "5", msg: 'How are you', likeCount: '17' },
   { id: "6", msg: `Its 'my first post`, likeCount: '7' }
  ]
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
  ]
 }
}