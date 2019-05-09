import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './redux/state.jsx';

import profilePageReducer from './redux/profilePageReducer'
import dialogPageReducer from './redux/dialogPageReducer'
import sideBarReducer from './redux/sideBarReducer'
import { combineReducers, createStore } from 'redux'


const combinedReducers = combineReducers({
 profilePage: profilePageReducer,
 dialogPage: dialogPageReducer,
 sideBar: sideBarReducer
})
const store = createStore(combinedReducers)
const state = store.getState()

const renderEntirePage = (state) => {
 ReactDOM.render(<App
  state={state}
  dispatch={store.dispatch.bind(store)}
 />, document.getElementById('root'));
}

store.subscribe(() => {
 const state = store.getState();
 renderEntirePage(state)
});

renderEntirePage(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
