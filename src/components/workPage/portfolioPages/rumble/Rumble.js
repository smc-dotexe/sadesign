import React from 'react'
import './rumble.css'
import './responsiveRumble.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import blackArrowDown from '../../../../images/arrowBlackDown.png'
import ebPhone1 from '../../../../images/rumbleEarlyBirdPhone1.png'
import ebPhone2 from '../../../../images/rumbleEarlyBirdPhone2.png'
import ebPhone3 from '../../../../images/rumbleEarlyBirdPhone3.png'
import celebrityImage from '../../../../images/rumbleRandiPoster.png'
import celebrityImageMobile from '../../../../images/rumbleRandiPoster_Mobile.png'
import gutsGlory1 from '../../../../images/rebelGutsGlory1.png'
import gutsGlory2 from '../../../../images/rebelGutsGlory2.png'
import gutsGlory3 from '../../../../images/rebelGutsGlory3.png'



class Rumble extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            imageList: [gutsGlory1, gutsGlory2, gutsGlory3]
        }
    }

    rumbleImageChange = () => {
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
        return (
            <div className='rumbleContainer'>
                <div className='slide rumble'>
                    <HeaderComp />
                    <p className='rumbleQuote'>
                        " Great things in business are never done by one person; 
                        they're done by a team of people. "<br/><br/>
                        <span className='rumbleQuoteAuthor'>
                            - Steve Jobs, CEO & Co-founder of Apple Inc.
                        </span>
                    </p>
                    <img className='rumbleBlackArrow' src={blackArrowDown} alt='arrow facing down' />
                </div>
                <div className='rumbleDetails'>
                    <h1 className='rumbleHeading'>
                        RUMBLE BOXING STUDIO
                    </h1>
                    <p className='rumbleDescription'>
                        Rumble Boxing Studio is a pay as you box boutique fitness
                        in Calgary, Canada where "fight club meets night club" in an 
                        atmosphere of energy, focus and camaraderie. Rumble offers $20 therapy
                        in the form of Heavy Bag group fitness classes, bootcamps and personal training.
                        Retail in addition also plays an important role to the company's marketing
                        strategy with its retail line RMBL. <br/><br/>

                        As part of the internal marketing team, our focus has been to elevate the brand
                        to a national platform. As the product moves into larger cities throughout Canada,
                        the brand will shift from local perspective to a corporate voice. It is my task
                        as lead graphic designer to ensure that Rumble's core values are represented in all
                        areas of digital marketing, pring and social media.
                    </p>
                    <div className='roleOnTheTeamDiv'>
                        <h2 className='roleOnTheTeamHeading'>
                            MY ROLE ON THE TEAM
                        </h2>
                        <ul className='roleList1'>
                            <li>Creative Direction</li>
                            <li>Research</li>
                            <li>Strategy</li>
                            <li>Digital Graphics</li>
                            <li>Print Material Graphics</li>
                        </ul>
                        <ul className='roleList2'>
                            <li>Storyboarding</li>
                            <li>Social Media Content Creation</li>
                            <li>Logo Design</li>
                            <li>Retail Designs</li>
                        </ul>
                    </div>
                    <div className='earlyBirdContainer'>
                        <img className='ebPhone' id='ebPhone1' src={ebPhone1} alt='cell phone' />
                        <img className='ebPhone' id='ebPhone2' src={ebPhone2} alt='cell phone' />
                        <img className='ebPhone' id='ebPhone3' src={ebPhone3} alt='cell phone' />
                        <h1 className='earlyBirdHeading'>
                            The Early Bird Catches the Worm
                        </h1>
                        <p className='earlyBirdDescription'>
                            Making time to workout is often isolated to the early hours of the day. In
                            an effort to cater to these early birds, the internal marketing team came up
                            with the Early Bird Campaign. At Rumble, Early Bird pricing applies to those 
                            taking classes any time from 6am till Noon.<br/><br/>

                            This is the first photoshoot I was able to conceptualize and assist on with 
                            the local photographer, Irving Torres. Prior to launching the campaign, I had 
                            created a vision board for the overall look and feel of the brand - sexy,
                            badass and confident. This is what you feel when you've accomplished a Rumble
                            class.
                        </p>
                    </div>

                    <div className='celebrityContainer'>
                        <div className='greyBGDiv'></div>
                        <h2 className='celebrityHeading'>Celebrity</h2>
                        <p className='celebrityDescription'>
                            The Power of influence. One of the main stars of this shoot is Fitness Trainer,
                            Influencer, and WBFF Bikini Pro winner, Randi Kennedy. Research into fitness
                            business models such as Soul Cycle shows that is the celebrity of the trainer 
                            that positively impacts the brand.
                        </p>
                        <img className='celebrityImage' src={celebrityImage} alt='Randi Kennedy Poster' />
                        <img className='celebrityImageMobile' src={celebrityImageMobile} alt='Randi Kennedy Poster' />
                        
                    </div>

                    <div className='rebrandingContainer'>
                        <h1 className='rebrandingHeading'>REBRANDING BOOTCAMPS</h1>
                        <div className='rebrandingImageContainer' onClick={this.rumbleImageChange}>
                            <img 
                                className='rebrandingImage'
                                src={imageList[imageNo]} 
                                alt='guts and glory' />
                            <div className='rumbleDotContainer'>
                                {imageList.map(imageDot => {
                                    imageIndex=imageList.indexOf(imageDot)
                                    if(imageIndex === imageNo) {
                                        return (
                                            <span key={imageNo} className='dot' id='rumbleDot'></span>
                                        )
                                    }
                                        return (
                                            <span key={imageIndex} className='dotClear' id='rumbleDotClear'></span>
                                        )
                                })}
                        </div>    
                        </div>
                        <p className='rebrandingDescription'>
                            Rumble boxing is in fact more than just boxing. They offer bootcamps 
                            and personal training. Their bootcamps needed a revamp. The objective
                            was to create a wordmark with some edginess. I chose to incorporate 
                            layering techniques within photoshop to achieve a moody atmosphere that 
                            reflected the grit and the intensity of Rumble Bootcamps.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rumble