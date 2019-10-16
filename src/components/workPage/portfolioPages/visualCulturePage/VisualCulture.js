import React from 'react'
import './visualCulture.css'
import './responsiveVisualCulture.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import arrowBlackDown from '../../../../images/arrowBlackDown.png'


class VisualCulture extends React.Component {
    render() {
        return(
            <div className='vcContainer'>
                <div className='slide visualCulture'>
                    <HeaderComp />
                    <img className='vcArrowDown' src={arrowBlackDown} alt='arrow pointing down' />
                </div>

                <div className='vcDetails'>
                    <h1 className='vcHeading'>5 People Average</h1>
                </div>
            </div>
        )
    }
}

export default VisualCulture