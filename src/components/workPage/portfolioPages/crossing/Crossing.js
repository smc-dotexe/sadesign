import React from 'react'
import './crossing.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import crossingArrowBlackDown from '../../../../images/arrowBlackDown.png'
import crossingOldLogo from '../../../../images/crossingOldLogo.png'
import crossingNewLogo from '../../../../images/crossingNewLogo.png'



export default function Crossing() {
    return (
        <div className='crossingContainer'>
            <div className='slide crossing'>
                <HeaderComp />
                <img 
                    className='crossingArrowDown'
                    src={crossingArrowBlackDown} 
                    alt='arrow pointing down'
                />
            </div>
            <div className='crossingDetails'>
                <h1 className='crossingHeading'>
                    Better Together
                </h1>
                <div className='crossingOriginalLogoDiv'>
                    <img className='crossingOriginalLogo' src={crossingOldLogo} alt='original crossing logo'/>
                    <p className='crossingOriginalLogoCaption'>Old Logo</p>
                </div>
                <p className='crossingOriginalLogoDescription'>
                    This project was done in collaboration with Purposefully Soulful Business consultancy.
                    The aim was to rebrand Crossing Dance to create a brand that is inclusive, modern and 
                    wholesome. <br/><br/>
                    Stemming from religious roots. Crossing Dance hoped to retain the spiritual element into 
                    their logo without being off-putting to a greater market. Successfully the logo was created 
                    served as both meaning intersections as well as Christ.
                </p>
                <div className='crossingNewLogoDiv'>
                    <img className='crossingNewLogo' src={crossingNewLogo} alt='new crossing logo'/>
                    <p className='crossingNewLogoCaption'>New Logo</p>
                </div>
                <p className='crossingNewLogoDescription'>
                   "We have always been, and will continue to be, a place of intersection between: faith and art,
                   tradition and innovation, and technique artistry... <br/><br/>
                   Our logos draws from art history. The circle and intersecting threads represent unity, wholeness,
                   infinity and God. The lines in our logo carry forward this theme and represent movement, dance, 
                   intersections and the interactions of the community at Crossings Dance. The cross at the centre 
                   represents our roots as a faith-based dance school and our mission to nurture the whole dancer." 
                   <span> Crossing Dance Studio, Calgary</span>
                </p>
            </div>
        </div>
    )
}