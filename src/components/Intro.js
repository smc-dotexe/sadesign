import React, { Fragment } from 'react'
import saLogo from '../images/sa.png'
import redArrowDown from '../images/redarrowdown2.png'
import SandwichMenu from './sandwichComp/SandwichMenu'
import { Spring, Transition, animated } from 'react-spring/renderprops'
class Intro extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            displayMenu: false,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
        }
    }

    sandwichMenu = () => {
        this.setState(prevState => ({displayMenu: !prevState.displayMenu}))
        console.log('clicked')  
    }

    handleResize = () => {
        let resizeWindowHeight = window.innerHeight
        let resizeWindowWidth = window.innerWidth
        if (resizeWindowHeight !== this.state.windowHeight || resizeWindowWidth !== this.state.windowWidth) {
            this.setState({ windowHeight: resizeWindowHeight, windowWidth: resizeWindowWidth})
            console.log('called handle resize', 'resizeWindowHeight', resizeWindowHeight)
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize)
    }

    render() {
        console.log('window height', window.innerHeight)
        let sandwichBtnAnimation;
        if (this.state.displayMenu) {
            sandwichBtnAnimation = 'sandwichButtonContainer close'
        } else {
            sandwichBtnAnimation = 'sandwichButtonContainer'
        }
        return (
            <div 
                className='slide intro' 
                style={{
                    backgroundColor: 'blue',
                    width: `${this.state.windowWidth}px`,
                    height: `${this.state.windowHeight}px`
                    }}
            >
                <div className='leftNav'>
                    <img id='saLogo' src={saLogo} alt='logo' />
                    <p id='hours'>M-M <br/> 00:00-00:00</p>
                </div>
                <header>
                <h1 id='sarah'>SARAH</h1>
                <h1 id='alonso'>ALONSO</h1>
                <h1 id='design'>DESIGN</h1>
                <h1 id='year'>2019</h1>
                </header>
                <div id='quote'>
                <p id='focusQuote'>"The people that matter realize
                    that all that you should focus on
                    is the work"<br />
                    <span id='authorQuote'>-Jerrod Carmichael, Comedian on the <br/>Tim Ferris Podcast, Ep. 222.
                    </span>
                </p>
                </div>
                <div id='arrow'>
                    <img id='redArrowDown' src={redArrowDown} alt='red arrow'/>
                </div>
                <div id='goalDiv'>
                <h1 id='goal'>My goal is simple <br/>
                    &#8212; Good design
                </h1>
                </div>
                
                <div className='rightNav'>
                    <div className={sandwichBtnAnimation} 
                         onClick={this.sandwichMenu}                       
                    >
                        <div className='sandwich'></div>
                        <div className='sandwich'></div>
                        <div className='sandwich'></div>
                    </div>
                </div>
        
                    <SandwichMenu 
                        passSandwichMenu={this.sandwichMenu}
                        passDisplayMenu={this.state.displayMenu}
                    />
            </div>
        )
    }
}

export default Intro