import React from 'react'
import greyArrow from '../images/greyarrowright.png'
import redArrow from '../images/redarrowright.png'

class DesignersArt extends React.Component {
    render() {
        return (
            <div className='slide designersArt'>
                <div id='border'></div>
                <h1>THE DESIGNERS ART</h1>
                    <p>
                        I aim to improve the world around me through human <br/>
                        centred design. I approach projects with empathy and <br/>
                        intuition. Equipped with a thirst for information and a <br/>
                        knack for research I tackle tough design challenges with <br/>
                        an ambition to produce good design and a need to <br/>
                        make an impact.
                    </p>
                    <img id='arr1' src={greyArrow} alt='grey arrow' />
                <div id='daBG'>
                    <h1>"If you want <br/>
                        momentum, you'll <br/>
                        have to create it"
                    </h1>
                </div>
                    <p id='daAuthor'> &#8212; Ryan Holiday, Author of The Obstacle Is The Way, 2014.</p>
                    <p id='buildBrand'>BUILDING MY BRAND, MY VOICE</p>
                    {/* <p id='arr2'>
                        >
                    </p> */}
                    <img id='arr2' src={redArrow} alt='redarrow' />

            </div>
        )
    }
}

export default DesignersArt