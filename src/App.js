import React from 'react';
import './App.css';
import Intro from './components/Intro'
import DesignersArt from './components/DesignersArt'

function App() {
  return (
    <div className="App">
      <Intro />
      {/* <div className='slide designersArt'>
        <h1>designer's art</h1>
      </div> */}
      <DesignersArt />
      <div className='slide designTraining'>
        <h1>Design Training</h1>
      </div>
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
