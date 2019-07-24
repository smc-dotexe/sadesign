import React from 'react';
import './App.css';
import Intro from './components/Intro'
import DesignersArt from './components/DesignersArt'
import DesignTraining from './components/DesignTraining'

function App() {
  return (
    <div className="App">
      <Intro />
      <DesignersArt />
      {/* <div className='slide designTraining'>
        <h1>Design Training</h1>
      </div> */}
      <DesignTraining />
      <div className='slide smlBusiness'>
        <h1>SML BUSINESS</h1>
      </div>
      <div className='slide blog'>
        <h1>blog</h1>
      </div>
    </div>
  );
}

export default App;
