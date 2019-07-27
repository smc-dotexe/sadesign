import React from 'react'
import saLogo from '../images/sa.png'
import redArrowDown from '../images/redarrowdown2.png'
import SandwichMenu from './sandwichComp/SandwichMenu'

class Intro extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            displayMenu: false
        }
    }

    sandwichMenu = () => {
        this.setState(prevState=>({displayMenu: !prevState.displayMenu}))
        console.log(this.state.displayMenu)
    }

    render() {

        const sandwichStyle = this.state.displayMenu ? {display: 'none'} : {}

        return (
            <div className='slide intro'>
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
                    that all <br/>that you should focus on
                    is the work"<br/> 
                    <span id='authorQuote'>-Jerrod Carmichael, Comedian on the
                        <br/>Tim Ferris Podcast, Ep. 222.
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
                    <div className='sandwichContainer' 
                         onClick={this.sandwichMenu}
                         style={sandwichStyle}>
                    <div className='sandwich'></div>
                    <div className='sandwich'></div>
                    <div className='sandwich'></div>
                    </div>
                </div>
                    {this.state.displayMenu ? <SandwichMenu passSandwichMenu={this.sandwichMenu}/> : null}                
            </div>
        )
    }
}

export default Intro