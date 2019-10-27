import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import './App.css';
import './components/sandwichComp/sandwichMenu.css'
import './animations.css';
import saLogoWhite from './images/sa.png'
import saLogoBlack from './images/saBlack.png'
import SandwichMenu from './components/sandwichComp/SandwichMenu.js'
import Home from './components/Home'
import AboutPage from './components/aboutPage/About.js'
import WorkPage from './components/workPage/WorkList'
import ContactPage from './components/contactPage/Contact'
import WorkingForMyself from './components/workPage/portfolioPages/workingForMyself/WorkingForMyself'
import Renu from './components/workPage/portfolioPages/renuPage/Renu'
import VisualCulture from './components/workPage/portfolioPages/visualCulturePage/VisualCulture'
import PhoDauBo from './components/workPage/portfolioPages/phoDauBo/PhoDauBo'
import Rebel from './components/workPage/portfolioPages/rebel/Rebel'
import Crossing from './components/workPage/portfolioPages/crossing/Crossing'
import IrvingCrea from './components/workPage/portfolioPages/irvingCrea/IrvingCrea'
import Rumble from './components/workPage/portfolioPages/rumble/Rumble'
import ScrollToTop from 'react-router-scroll-top'
import { whileStatement } from '@babel/types';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: true,  
    }
  }

  // scrollToTop = () => {
  //   window.scrollTo({
  //     top:0,
  //     left:0,
  //     behavior: 'smooth'
  //   });
  // }

  sandwichMenu = () => {
      this.setState(prevState => ({displayMenu: !prevState.displayMenu}))
  }

  navLinkClicked = () => {
    this.setState({displayMenu: true})
  }

  clickOutOfMenu = () => {
    // if (this.state.displayMenu === false) {
    //   this.sandwichMenu()
    // }
    // this.setState({displayMenu: false})
    console.log('ran')
  }

  render() {
    console.log('displayMenu = ', this.state.displayMenu)
    console.log(window.innerWidth)

    let sandwichBtnAnimation;
    if (this.state.displayMenu===false) {
        sandwichBtnAnimation = 'sandwichButtonContainer close'
    } else {
        sandwichBtnAnimation = 'sandwichButtonContainer'
    }

    let menuClass;
    if (this.state.displayMenu) {
        menuClass = 'sandwichComp off'
        console.log('current menuClass = ', menuClass)
    } else {
        menuClass ='sandwichComp'
        console.log('current menuClass = ', menuClass)

    }

    return (
      <Router>
      <ScrollToTop>
      <div className='App' onClick={this.clickOutOfMenu}>
        <div className='containerBorder'>
              <NavLink to='/'>
                { window.location.pathname === '/contact' ? 
                  <div className='saLogo' style={{zIndex:'0'}}></div>
                  :
                  <div className='saLogo' style={{zIndex:'100'}}></div>
                } 
              </NavLink>
              <p id='hours' style={{zIndex:'1'}}>M-M <br/> 00:00-00:00</p>



                   
        </div>

        <div className={sandwichBtnAnimation} onClick={this.sandwichMenu}>
          {window.location.pathname === '/contact' ? 
            <>
            <div className='sandwich' style={{zIndex:'0'}}></div>
            <div className='sandwich' style={{zIndex:'0'}}></div>
            <div className='sandwich' style={{zIndex:'0'}}></div>
            </> :
            <>
            <div className='sandwich' style={{zIndex:'20'}}></div>
            <div className='sandwich' style={{zIndex:'20'}}></div>
            <div className='sandwich' style={{zIndex:'20'}}></div>
            </>
          }

        </div>
        <div className='sandwichContainer' >
          <div className={menuClass}>
              <h4 id='sandwichSarah'>Sarah</h4><br/>
              <h4 id='sandwichAlonso'>Alonso</h4>
              <h4 id='sandwichDesign'>Design</h4>
              <ul id='sandwichLinks'>
                  <li onClick={this.navLinkClicked}>
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
                  <li onClick={this.sandwichMenu}>
                    <NavLink
                      activeStyle={{
                        textDecoration: 'underline',
                        color: 'red'
                      }}
                      to='/contact'>
                        Contact
                    </NavLink>
                  </li>
              </ul>
          </div>         
        </div>
        <Switch>
          <Route exact path='/' render={(props) => (      
                <Home {...props} />
            )}
          />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/work' component={WorkPage} />
          <Route path='/work/workingformyself' component={WorkingForMyself} />
          <Route path='/work/renu' component={Renu} />
          <Route path='/work/visualculture' component={VisualCulture} />
          <Route path='/work/phodaubo' component={PhoDauBo} />
          <Route path='/work/rebel' component={Rebel} />
          <Route path='/work/crossing' component={Crossing} />
          <Route path='/work/irvingcrea' component={IrvingCrea} />
          <Route path='/work/rumble' component={Rumble} />

          {/*passing black colored elements to contact page.
          need to do it this way to render original elements when
          user presses the back button*/}
          <Route path='/contact' component={(props) => 
              (
                <>
                <NavLink to='/'>
                    <div className='saLogoBlack'></div> 
                </NavLink>
                  <div 
                    className={sandwichBtnAnimation}
                    onClick={this.sandwichMenu}
                  >
                    <div className='sandwichBlack'></div>
                    <div className='sandwichBlack'></div>
                    <div className='sandwichBlack'></div>
                  </div>
                  <p id='hoursBlack' style={{zIndex: '1'}}>M-M<br/> 00:00-00:00</p>
                  <ContactPage 
                  passSandwichmenu={this.sandwichMenu} 
                  passSandwichAnimation={sandwichBtnAnimation}
                  {...props}
                  />
                </>
              )
            }
          />
          
        </Switch>   
      </div>
      </ScrollToTop>
      </Router>
    );
  }

}

export default App;
