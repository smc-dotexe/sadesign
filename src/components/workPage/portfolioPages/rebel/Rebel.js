import React from 'react'
import './rebel.css'
import './responsiveRebel.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import storylineImage from '../../../../images/rebelStorylineImage.png'
import phase1Image from '../../../../images/rebelPhase1Image.png'
import phase1Image2 from '../../../../images/rebelPhase1Image2.png'
import phase1Image3 from '../../../../images/rebelPhase1Image3.png'
import phase1Image4 from '../../../../images/rebelPhase1Image4.png'
import phase1Image5 from '../../../../images/rebelPhase1Image5.png'
import rebelSocialMedia from '../../../../images/rebelSocialMedia.png'
import rebelScreenShot from '../../../../images/rebelScreenShot.png'
import storylineImageMobile from '../../../../images/rebelStorylineImage_Mobile.png'



class Rebel extends React.Component {
    constructor() {
        super()
        this.state={
            counter: 0,
            imageList: [phase1Image, phase1Image2, phase1Image3, phase1Image4, phase1Image5],
        }
    }

    rebelImageChange = () => {
        if (this.state.counter >=4) {
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
            <div className='rebelContainer'>
                <div className='slide rebel'>
                    <HeaderComp />
                    <p className='steveJobsQuote'>
                        " Great things in business are never done by one person; 
                        they're done by a team of people. "<br/><br/>
                        <span className='steveJobsQuoteAuthor'>
                            - Steve Jobs, CEO & Co-founder of Apple Inc.
                        </span>
                    </p>
                </div>
                
                <div className='rebelDetails'>
                    <h1 className='rebelHeading'>REBEL MARKETING</h1>
                    <p className='rebelDescription'>
                        To have led a successful rebellion, history would have recorded
                        it. There would be a story to tell. There would be a narrative to 
                        inspire. The story usually begins with a growing dissastisfaction 
                        with the status-quo. From amongst society, an individual or group
                        arises with a philosophy to change the system - against all and 
                        any odds.<br/><br/>
                        <img className='storylineImageMobile' src={storylineImageMobile} alt='rebel storyline' />
                        With the right tools. With the right medium, change is possible.
                        There is strength in Numbers. There is strength in stories. What 
                        gets measured gets done. When stories are well told and numbers 
                        accumulate both a brand and a philosphy can change the course of time.
                    </p>
                    <img className='storylineImage' src={storylineImage} alt='rebel storyline' />
                    <h2 className='iconHeading'>THE ICON</h2>

                    <div className='rebelImageContainer' onClick={this.rebelImageChange}>
                        <img 
                            className='phase1Image' 
                            src={imageList[imageNo]} 
                            alt='rebel phase 1' />
                        <div className='rebelDotContainer'>
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

                    <p className='rebelLogoDescription'>
                        Numbers play a significant role in Rebel's branding strategy for it's clients. 
                        The Designer's objective is to create a visual identity that encompasses Rebel 
                        Marketing's emphasis on the importance of quantifying the rate of returns for 
                        Rebel's clients. <br/><br/>
                        For this Trademark, the use of the numbers "1" and "2" have been utilized to create
                        both the letter "R" and the number "12". 12 representing the value of time.
                    </p>
                    <h2 className='rebelSocialMediaHeading'>SOCIAL MEDIA ART</h2>
                    <img className='rebelSocialMediaImage' src={rebelSocialMedia} alt='rebel social media'/>
                    <img className='rebelScreenShot' src={rebelScreenShot} alt='rebel screen shot' />
                </div>
            </div>
        )
    }
}

export default Rebel