import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import redArrow from '../images/redarrowright.png'
import '../styles/responsiveDesignersArt.css'
// import '../styles/designersArtQuery.css'

class DesignersArt extends React.Component {

    aboutPageLink = () => {
        window.location.href='sadesign.netlify.com/about'
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
                    <img id='arr1' src={redArrow} alt='red arrow' onClick={this.aboutPageLink}/>
                    <div id='daBG'>
                        <h1 id='daBGQuote'>"If you want
                            momentum, you'll 
                            have to create it yourself, right now."
                        </h1>
                    
                        <p id='daAuthor'> &#8212; Ryan Holiday, Author of The Obstacle Is The Way, 2014.</p>
                        <p id='myBrand'>My Brand</p>
                        <img id='arr2' src={redArrow} alt='redarrow' />
                    </div>
            </div>
        )
    }
}

export default DesignersArt