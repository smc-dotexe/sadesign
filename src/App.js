import React from 'react';
import './App.css';
import Intro from './components/Intro'
import DesignersArt from './components/DesignersArt'
import DesignTraining from './components/DesignTraining'
import SmallBusiness from './components/SmallBusiness'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Intro />
      <DesignersArt />
      <DesignTraining />
      <SmallBusiness />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
