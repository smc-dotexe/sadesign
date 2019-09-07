import React from 'react';
import './App.css';
import './animations.css';
import './mediaQuery.css'
import Intro from './components/Intro'
import DesignersArt from './components/DesignersArt'
import DesignTraining from './components/DesignTraining'
import SmallBusiness from './components/SmallBusiness'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Intro />
      <DesignersArt />
      <DesignTraining />
      <SmallBusiness />
      <Contact />
    </div>
  );
}

export default App;
