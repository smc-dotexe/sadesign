import React, { Fragment } from 'react'
import '../styles/responsiveIntro.css'
import saLogo from '../images/sa.png'
import redArrowDown from '../images/redarrowdown2.png'
import SandwichMenu from './sandwichComp/SandwichMenu'
import { Spring, Transition, animated } from 'react-spring/renderprops'
class Intro extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='slide intro'>
                <header>
                    <h1 id='sarah'>SARAH</h1>
                    <h1 id='alonso'>ALONSO</h1>
                    <h1 id='design'>DESIGN</h1>
                    
                </header>
                    <h1 id='year'>2019</h1>
                <div id='quote'>
                    <p id='focusQuote'>"The people that matter realize
                        all that you should focus on
                        is the work"<br />
                        <span id='authorQuote'>&#8212;Jerrod Carmichael, Comedian on the <br/>Tim Ferris Podcast, Ep. 222.
                        </span>
                    </p>
                </div>
                <div id='goalDiv'>
                    <h1 id='goal'>My goal is simple
                        &#8212;
                    </h1>
                </div>
            </div>
        )
    }
}

export default Intro