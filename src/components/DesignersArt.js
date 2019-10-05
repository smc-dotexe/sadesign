import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AboutPage from './aboutPage/About.js'
import redArrow from '../images/redarrowright.png'
import '../styles/responsiveDesignersArt.css'
// import '../styles/designersArtQuery.css'

class DesignersArt extends React.Component {

    aboutPageLink = () => {
        window.location.href='/about'
    }

    workPageLink = () => {
        window.location.href='/work'
    }

    render() {
        return (
            <div className='slide designersArt'>
                <h1 id='goodDesignTitle'>Good Design</h1>
                <h1 id='daTitle'>THE DESIGNER'S ART</h1>
                    <p id='daTitleDescription'>
                        I aim to improve the world around me through human 
                        centred design. I approach projects with empathy and 
                        intuition.
                    </p>
                    {/* <Link to='/about' className='arrowLink'> */}
                        <img className='arrowLink' src={redArrow} alt='red arrow' onClick={this.aboutPageLink}/>
                    {/* </Link> */}
                    <div id='daBG'>
                        <h1 id='daBGQuote'>"If you want
                            momentum, you'll 
                            have to create it yourself, right now."
                        </h1>
                    
                        <p id='daAuthor'> &#8212; Ryan Holiday, Author of The Obstacle Is The Way, 2014.</p>
                        <p id='myBrand'>My Brand</p>
                        <img id='arr2' src={redArrow} alt='redarrow' onClick={this.workPageLink} />
                    </div>
            </div>
        )
    }
}

export default DesignersArt