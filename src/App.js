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
  const { profilePage, dialogPage } = props.state;
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Route path="/profile" render={() => <Profile profilePage={profilePage} />} />
          <Route path="/dialogs" render={() => <Dialogs dialogPage={dialogPage} />} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

