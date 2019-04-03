import React from 'react';
import './App.css';

const App = () => {
  return (<>
    <Header />
    <div className="App">
      <h1>SOCNET</h1>
    </div>
    <Technologies />
  </>
  );
}

const Header = () => {
  return (
    <>
      <a href="#s">Home</a>  {" | "}
      <a href="#s">News Feed</a>  {" | "}
      <a href="#s">Messages</a>
    </>
  );
}

const Technologies = () => {
  return (
    <ul>
      <li>css</li>
      <li>html</li>
      <li>js</li>
      <li>react</li>
    </ul>
  )
};

export default App;
