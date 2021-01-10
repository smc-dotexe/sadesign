import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import './App.css';
import './components/sandwichComp/sandwichMenu.css'
import './animations.css';
import WorkingForMyself from './components/workPage/portfolioPages/workingForMyself/WorkingForMyself'
import Renu from './components/workPage/portfolioPages/renuPage/Renu'
import VisualCulture from './components/workPage/portfolioPages/visualCulturePage/VisualCulture'
import PhoDauBo from './components/workPage/portfolioPages/phoDauBo/PhoDauBo'
import Rebel from './components/workPage/portfolioPages/rebel/Rebel'
import Crossing from './components/workPage/portfolioPages/crossing/Crossing'
import IrvingCrea from './components/workPage/portfolioPages/irvingCrea/IrvingCrea'
import Rumble from './components/workPage/portfolioPages/rumble/Rumble'
import PracticeSpot from './components/workPage/portfolioPages/practiceSpot/PracticeSpot'
import ScrollToTop from 'react-router-scroll-top'
import lazyImport from './lazyImport'

const Home = lazyImport('./components/Home')
const AboutPage = lazyImport('./components/aboutPage/About')
const WorkPage = lazyImport('./components/workPage/WorkList')
const ContactPage = lazyImport('./components/contactPage/Contact')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: true,
      clickOut: false,
    }

  }

  componentWillMount() {
    document.addEventListener('mousedown', this.clickOutsideNav, false) 
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickOutsideNav, false)
  }

  sandwichMenu = () => {
      this.setState(prevState => ({
        displayMenu: !prevState.displayMenu,
        clickOut: true}))
  }

  navLinkClicked = () => {
    this.setState({displayMenu: true})
  }

  clickOutsideNav = (e) => {
    if (this.node.contains(e.target)) {
      return 
    } else {
      this.navLinkClicked()
    }
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
        menuClass = 'sandwichComp off'
    } else {
        menuClass ='sandwichComp'
    }
    
    return (
      <Router>
        <ScrollToTop>
          <div className='App'>

            <div className='containerBorder'>
                  <NavLink to='/'>
                    <div className='saLogo'></div>
                  </NavLink>
                  <p id='hours' style={{zIndex:'1'}}>M-M <br/> 00:00-00:00</p>                
            </div>

            <div className={sandwichBtnAnimation} onClick={this.sandwichMenu}>
                  <div className='sandwich' style={{zIndex:'20'}}></div>
                  <div className='sandwich' style={{zIndex:'20'}}></div>
                  <div className='sandwich' style={{zIndex:'20'}}></div>
            </div>
            <div className='sandwichContainer'>
              <div 
                className={menuClass} 
                ref={e => this.node = e}
                >
                  <div 
                    id='sandwichCloseBtnContainer'
                    onClick={this.sandwichMenu}
                  >
                    <p>X</p>
                  </div>
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
                      <li 
                        onClick={this.sandwichMenu} 
                        className='workLink'
                      >
                        <NavLink
                          activeStyle={{
                            textDecoration: 'underline',
                            color: 'red'
                          }}
                          to='/work'>
                          Work
                        </NavLink>
                      </li>
                      <li 
                        onClick={this.sandwichMenu}
                        className='contactLink'
                        id='contactLink'
                      >
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
            <Suspense fallback={<div className='loading'></div>}>
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
                <Route path='/work/thepracticespot' component={PracticeSpot} />

                {/*passing black colored elements to contact page.
                need to do it this way to render original elements when
                user presses the back button*/}
                <Route path='/contact' render={(props) => 
                    (
                      <>
                      <Link to='/'>
                        <div className='saLogoBlack'></div> 
                      </Link>
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
            </Suspense>  
          </div>
        </ScrollToTop>
      </Router>
    );
  }

}

export default App;
