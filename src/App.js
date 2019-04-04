import React from 'react';
import './App.css';
import Header from './Header'
import Technologies from './Technologies'
import Footer from './Footer';

const App = () => {
  return (<>
    <Header />
    <div className="App">
      <h1>SOCNET</h1>
    </div>
    <Technologies />
    <Footer />
  </>
  );
}

export default App;
