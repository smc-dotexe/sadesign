import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import './App.css';
import './components/sandwichComp/sandwichMenu.css'
import './animations.css';
import saLogo from './images/sa.png'
import SandwichMenu from './components/sandwichComp/SandwichMenu.js'
import Home from './components/Home'
import AboutPage from './components/aboutPage/About.js'
import WorkPage from './components/workPage/WorkList'
import WorkingForMyself from './components/workPage/portfolioPages/workingForMyself/WorkingForMyself'
import Test from './components/workPage/portfolioPages/test'



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
    console.log('WINDOW WIDTH', window.innerWidth)
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
                  <li onClick={this.sandwichMenu}>
                    <NavLink 
                      exact
                      activeStyle={{
                        textDecoration: 'underline',
                        color: "red"
                      }} 
                      to='/'
                    >
                      Home
                    </NavLink>
                  </li>
                  <li onClick={this.sandwichMenu}>
                    <NavLink 
                      activeStyle={{
                        textDecoration: 'underline',
                        color: "red"
                      }}
                      to='/about'>
                      About
                    </NavLink>
                  </li>
                  <li onClick={this.sandwichMenu}>
                    <NavLink
                      activeStyle={{
                        textDecoration: 'underline',
                        color: 'red'
                      }}
                      to='/work'>
                      Work
                    </NavLink>
                  </li>
                  <li>Contact</li>
              </ul>
          </div>         
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/work' component={WorkPage} />
          <Route path='/work/workingformyself' component={WorkingForMyself} />
        </Switch>   
      </div>
      </Router>
    );
  }

}

export default App;
