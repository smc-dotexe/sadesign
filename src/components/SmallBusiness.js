import React from 'react'
import pdb from '.././images/pdb.png'
import pdbGlitch from '.././images/saDualGlitch_Web.svg'
import greyArrow from '../images/greyarrowright.png'


class SmallBusiness extends React.Component {
    render() {
        return (
            <div className='slide smallBusiness'>
                <div id='pdbBorder'></div>
                <h1 id='smlHeading'>
                    SML BUSINESS
                </h1>
                <img id='pdb' src={pdb} alt='pdbClient' />
                <img id='pdbGlitch' src={pdbGlitch} alt='pdbGlitch' />
                <h1 id='lrgROI'>
                    LRG ROIs
                </h1>
                <h1 id='onethousand'>
                 1000
                </h1>
                <p id='pdbQuote'>
                    "Success need not be complicated. Just start with making 1,000<br/>
                    people extremely, extremely happy...True fans are not only the <br/>
                    direct source of your income, but also your chief marketing force <br/>
                    for the ordinary fans."&#8212;Kevin Kelly, Author of 1,000 True Fans.
                </p>
                <p id='phoDauBoLink'>PHO DAU BAO</p>
                <img id='pdbArrow' src={greyArrow} alt='grey arrow'/>
            </div>
        )
    }
}

export default SmallBusiness