import React from 'react'
import '../styles/smallBusinessQuery.css'
import pdb from '.././images/pdb.png'
import pdbMenuMobile from '.././images/pdbMenu_Mobile.png'
import pdbGlitch from '.././images/saDualGlitch_Web.svg'
import pdbGlitchMobile from '.././images/saDualGlitch_Mobile.png'
import greyArrow from '../images/greyarrowright.png'


class SmallBusiness extends React.Component {
    constructor(props) {
        super(props) 
    }
    render() {
        //Switch web and mobile images depending on window size
        let menuImageSwitch, glitchImageSwitch
        if (this.props.passWindowWidth < 600) {
            menuImageSwitch = pdbMenuMobile
            glitchImageSwitch = pdbGlitchMobile
        } else {
            menuImageSwitch = pdb
            glitchImageSwitch = pdbGlitch
        }

        return (
            <div className='slide smallBusiness'>
                <div id='pdbBorder'></div>
                <h1 id='smlHeading'>SML BUSINESS</h1>
                <img id='pdb' src={menuImageSwitch} alt='pdbClient' />
                <img id='pdbGlitch' src={glitchImageSwitch} alt='pdbGlitch' />
                <h1 id='lrgROI'>
                    LRG ROIs
                </h1>
                <h1 id='onethousand'>
                 1000
                </h1>
                <p id='pdbQuote'>
                    "Success need not be complicated. Just start with making 1,000
                    people extremely, extremely happy...True fans are not only the
                    direct source of your income, but also your chief marketing force
                    for the ordinary fans.<i>"&#8212;Kevin Kelly, Author of 1,000 True Fans.</i>
                </p>
                <p id='phoDauBoLink'>PHO DAU BAO</p>
                <img id='pdbArrow' src={greyArrow} alt='grey arrow'/>
            </div>
        )
    }
}

export default SmallBusiness