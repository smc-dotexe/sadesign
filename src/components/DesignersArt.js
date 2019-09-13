import React from 'react'
import redArrow from '../images/redarrowright.png'
// import '../styles/designersArtQuery.css'

class DesignersArt extends React.Component {
    render() {
        return (
            <div className='slide designersArt'>
                <div className='border'></div>
                <h1 id='goodDesignTitle'>Good Design</h1>
                <h1 id='daTitle'>THE DESIGNER'S ART</h1>
                    <p id='daTitleDescription'>
                        I aim to improve the world around me through human 
                        centred design. I approach projects with empathy and 
                        intuition.
                    </p>
                    <img id='arr1' src={redArrow} alt='red arrow' />
                    <div id='daBG'>
                        <h1>"If you want
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