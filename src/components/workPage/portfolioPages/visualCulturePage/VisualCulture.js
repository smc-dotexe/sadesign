import React from 'react'
import './visualCulture.css'
import './responsiveVisualCulture.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import arrowBlackDown from '../../../../images/arrowBlackDown.png'
import vc1 from '../../../../images/vc1.png'
import vc2 from '../../../../images/vc2.png'
import vc3 from '../../../../images/vc3.png'



class VisualCulture extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            imageList: [vc1, vc2, vc3],
        }
    }

    vcImageChange = () => {
        if (this.state.counter >= 2) {
            this.setState({counter:0})
        } else {
            this.setState({counter: this.state.counter + 1})
        }
    }
    render() {
        const imageNo = this.state.counter 
        const imageList = this.state.imageList 
        let imageIndex
        return(
            <div className='vcContainer'>
                <div className='slide visualCulture'>
                    <HeaderComp />
                    <img className='vcArrowDown' src={arrowBlackDown} alt='arrow pointing down' />
                </div>

                <div className='vcDetails'>
                    <h1 className='vcHeading'>5 People Average</h1>
                    <p className='timFerrissQuote'>
                        <span className='openingQuote'>&ldquo;</span><br/>
                        you are the average of the five people you associate
                        with most. So do not underestimate the effects of your 
                        pessimistic, unambitious, or disorganized friends. If 
                        someone isn't making you stronger,<br/><span className='closingQuote'>&rdquo;</span>
                        <br/>
                        <span className='timFerrissCaption'>
                        - Tim Ferriss, author of The 4-hour Work Week
                        </span>
                    </p>
                    <p className='creativeSummary'>
                        During my Intership at Farmgroup in Bangkok, Thailand, the
                        Creative Director gave me some advise: "work in a place that has
                        other creatives better than you." In this way he suggested, I would 
                        grow as a designer. When I came back to Calgary, Canada I had the fine opportunity
                        to meet Irving Torres and Alyssa Dunn. Torres was at the beginning stages
                        of creating the collective. This collective pushes me to be better, work harder
                        and execute with precision.
                    </p>
                    <div className='vcImageContainer'>
                        <img src={vc1} alt='visual culture cards' />
                        <img src={vc2} alt='visual culture cards 2' />
                        <img src={vc3} alt='visual culture cards 3' />
                    </div>

                    <div className='vcDynamicImageContainer' onClick={this.vcImageChange}>
                        <img
                            className='vcDynamicImage'
                            src={imageList[imageNo]}
                            alt='visual culture cards' />
                        <div className='dotContainer'>
                            {imageList.map(imageDot => {
                                imageIndex=imageList.indexOf(imageDot)
                                if(imageIndex === imageNo) {
                                    return (
                                        <span key={imageNo} className='dot'></span>
                                    )
                                }
                                    return (
                                        <span key={imageIndex} className='dotClear'></span>
                                    )
                            })}
                        </div>
                    </div>
                    <p className='vcLogoDescription'>
                        The Icon for the collective I designed to represent
                        the index-fingers and thumbs of two hands framing a picture.
                        <br /><br />
                        The Wordmark incorporates diagonal cuts suggesting editing,
                        cutting, and upwards and forward action.
                    </p> 
                </div>
            </div>
        )
    }
}

export default VisualCulture