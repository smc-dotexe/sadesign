import React from 'react'
import saLogo from '../images/sa.png'

class Intro extends React.Component {
    render() {
        return (
            <div className='slide intro'>
                <div className='leftNav'>
                    <img id='saLogo' src={saLogo} alt='logo' />
                </div>
                <header>
                <h1 id='sarah'>SARAH</h1>
                <h1 id='alonso'>ALONSO</h1>
                <h1 id='design'>DESIGN</h1>
                <h1 id='year'>2019</h1>
                </header>
                <div id='quote'>
                <p>"The people that matter realize
                    that all <br/>that you should focus on
                    is the work"<br/> 
                    <span>-Jerrod Carmichael, Comedian on the
                        <br/>Tim Ferris Podcast, Ep. 222.
                    </span>
                </p>
                </div>
                <h1 id='goal'>My goal is simple <br/>
                    --Good design
                </h1>
                <div className='rightNav'>
                    <h4>right nav</h4>
                </div>
            </div>
        )
    }
}

export default Intro