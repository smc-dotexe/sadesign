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
                    <p className='timFerrissQuote'>
                        "you are the average of the five people you associate
                        with most. So do not underestimate the effects of your 
                        pessimistic, unambitious, or disorganized friends. If 
                        someone isn't making you stronger,"<br/>
                        <span className='timFerrissCaption'>
                        - Tim Ferriss, author of The 4-hour Work Week
                        </span>
                    </p>

                </div>
            </div>
        )
    }
}

export default VisualCulture