import React from 'react';
import './App.css';
import logo from './img/logo.png'
import imgProfile from './img/colors.jpeg'

const App = () => {
  return (
    <div className="appWrapper">
      <header className="header">
        <div className="logo"><img src={logo} alt="logo" /></div>

        <div className="mainText">SOCNET - Feel Free</div>
      </header>
      <nav className="nav">
        <div>Profile</div>
        <div>Message</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <div className="content">
        <div className="contentText">
          <div><img src={imgProfile} alt='' /></div>
          <div>avt + description</div>
          <div>My posts
            <div>New post
              <div>post 1</div>
              <div>post 2</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
