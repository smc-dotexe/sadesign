import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import Loadable from 'react-loadable'
// import Loader from './Loader'
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


const Loader = (props) => {
  console.log('here', props)
	if (props.pastDelay) {
    console.log('at if')
		return <h2>POOPOOPEEPEE.</h2>
	} else {
    console.log('at else')
		return null
	}
}
const LoadableHome = Loadable({
  loader: () => import('./components/Home'),
  loading: Loader,
  delay: 100
})

const LoadableAbout = Loadable({
  loader: () => import ('./components/aboutPage/About.js'),
  loading: Loader,
  delay: 100
})

const LoadableWork = Loadable({
  loader: () => import ('./components/workPage/WorkList'),
  loading: Loader,
  delay: 100
})

const LoadableRumble = Loadable({
  loader: () => import('./components/workPage/portfolioPages/rumble/Rumble'),
  loading: Loader,
  delay: 1
})


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
      console.log('sandwichMenu')
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
     console.log(window.innerWidth)

  //Sandwich button animation
    let sandwichBtnAnimation;
    if (this.state.displayMenu===false) {
        sandwichBtnAnimation = 'sandwichButtonContainer close'
    } else {
        sandwichBtnAnimation = 'sandwichButtonContainer'
    }

  //Show / Hide Navbar Menu
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
                <LoadableHome {...props} />
            )}
          />
          <Route path='/about' component={LoadableAbout} />
          <Route exact path='/work' component={LoadableWork} />
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
      </div>
      </ScrollToTop>
      </Router>
    );
  }

}

export default App;
