import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state.jsx';
const state = store.getState()

const renderEntirePage = () => {
 ReactDOM.render(<App
  state={state}
  dispatch={store.dispatch.bind(store)}
 />, document.getElementById('root'));
}

store.subscribe(renderEntirePage);
// setRender(renderEntirePage)

renderEntirePage();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
