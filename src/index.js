import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = {
 profilePage: {
  title: 'My posts',
  comments: [
   ['all ok ;)', '5'],
   [':D', '0'],
   [':)', '10'],
   ['I am alone', '57'],
   ['How are you', '17'],
   [`Its 'my first post`, '7']
  ]
 },
 dialogPage: {
  userList: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'],
  chat: [
   ['Me', 'Hi! How are you?'],
   ['User 1', `It's ok. How are you?`],
   ['Me', 'All right.'],
   ['Me', 'How was your day'],
   ['User 1', `All ok`],
   ['User 1', `Work hard`],
   ['User 1', `Came home`],
   ['User 1', `Learning programing`],
  ]
 }
}

ReactDOM.render(<App state={state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
