import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import './components/sandwichComp/sandwichMenu.css'
import './animations.css';
import saLogo from './images/sa.png'
import SandwichMenu from './components/sandwichComp/SandwichMenu.js'
import Home from './components/Home'
import AboutPage from './components/aboutPage/About.js'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      displayMenu: true,
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    });
  }

  sandwichMenu = () => {
      this.setState(prevState => ({displayMenu: !prevState.displayMenu}))
  }


  render() {
    let sandwichBtnAnimation;
    if (this.state.displayMenu===false) {
        sandwichBtnAnimation = 'sandwichButtonContainer close'
    } else {
        sandwichBtnAnimation = 'sandwichButtonContainer'
    }

    let menuClass;
    if (this.state.displayMenu) {
        menuClass = 'sandwichComp slider'
    } else {
        menuClass ='sandwichComp'
    }


    return (
      <Router>
      <div className='App'>
        <div className='containerBorder'>
                <img id='saLogo' src={saLogo} alt='logo' onClick={this.scrollToTop}/>
                <p id='hours'>M-M <br/> 00:00-00:00</p>        
        </div>

        <div className={sandwichBtnAnimation} onClick={this.sandwichMenu}>
            <div className='sandwich'></div>
            <div className='sandwich'></div>
            <div className='sandwich'></div>
        </div>
        <div className='sandwichContainer'>
          <div className={menuClass}>
              <p id='sandwichMenuExit' onClick={this.sandwichMenu}>x</p>
              <h4 id='sandwichSarah'>Sarah</h4><br/>
              <h4 id='sandwichAlonso'>Alonso</h4>
              <h4 id='sandwichDesign'>Design</h4>
              <ul id='sandwichLinks'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li>Work</li>
                  <li>Case Study</li>
                  <li>Contact</li>
              </ul>
          </div>         
        </div>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutPage} />
        </Switch>   
      </div>
      </Router>
    );
  }

}

export default App;
