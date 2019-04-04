import React from 'react';
import './App.css';
import Header from './Header'
import Technologies from './Technolies'

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

export default App;
