import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from "react-router-dom"


const App = (props) => {
  const { profilePage, dialogPage, sideBar } = props.state;
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar sideBar={sideBar} />
        <div className='content'>
          <Route exact path="/profile" render={() => <Profile profilePage={profilePage} />} />
          <Route path="/dialogs" render={() => <Dialogs dialogPage={dialogPage} />} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/news" component={News} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

