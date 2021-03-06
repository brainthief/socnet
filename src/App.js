import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import UserList from './components/UserList/UserList'
import { BrowserRouter, Route } from "react-router-dom"


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Route exact path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/news" component={News} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/user-list" component={UserList} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

