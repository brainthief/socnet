import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <Dialogs />
    </div>
  );
}

export default App;
