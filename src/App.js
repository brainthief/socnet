import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  const { profilePage, dialogPage } = props.state;
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className='content'>
        {/* <Profile profilePage={profilePage} /> */}
        <Dialogs dialogPage={dialogPage} />
      </div>

    </div>
  );
}

export default App;
