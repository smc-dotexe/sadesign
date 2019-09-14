import React from 'react';
import './App.css';
import './animations.css';
import './styles/introQuery.css'
import saLogo from './images/sa.png'
import Intro from './components/Intro'
import DesignersArt from './components/DesignersArt'
import DesignTraining from './components/DesignTraining'
import SmallBusiness from './components/SmallBusiness'
import Contact from './components/Contact'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  }

  setWindowDimensions = () => {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })

      console.log('windowidth = ', this.state.windowWidth)
      console.log('windowheight = ', this.state.windowHeight)
  }
  render() {
    return (
      <React.Fragment>
      {/*<div className='pageContainer'> */}
        <div className='containerBorder'>
            {/* <div className='leftNav'> */}
                <img id='saLogo' src={saLogo} alt='logo' />
                <p id='hours'>M-M <br/> 00:00-00:00</p>
            {/* </div> */}
        
        </div>
        <Intro 
          passWindowWidth={this.state.windowWidth}
          passWindowHeight={this.state.windowHeight}
          passSetWindowDimensions={this.setWindowDimensions}
        />
        <DesignersArt />
        <DesignTraining />
        <SmallBusiness 
          passWindowWidth={this.state.windowWidth}
          passWindowHeight={this.state.windowHeight}
        />
        <Contact />
      {/*</div> */}
      </React.Fragment>
    );
  }

}

export default App;
