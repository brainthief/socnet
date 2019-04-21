import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { state } from './redux/state.jsx'

const addNewPost = () => {
 state.profilePage.comments = [{ msg: state.profilePage.newComment, likeCount: '0' }, ...state.profilePage.comments]
 state.profilePage.newComment = ''
 renderEntirePage();
}

const changeTextArea = (e) => {
 state.profilePage.newComment = e.target.value
 renderEntirePage();
}

const renderEntirePage = () => {
 ReactDOM.render(<App state={state} addNewPost={addNewPost} changeTextArea={changeTextArea} />, document.getElementById('root'));
}

renderEntirePage();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
