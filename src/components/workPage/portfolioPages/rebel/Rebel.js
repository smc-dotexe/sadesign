import React from 'react'
import './rebel.css'
import './responsiveRebel.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import storylineImage from '../../../../images/rebelStorylineImage.png'
import phase1Image from '../../../../images/rebelPhase1Image.png'
import rebelSocialMedia from '../../../../images/rebelSocialMedia.png'
import rebelScreenShot from '../../../../images/rebelScreenShot.png'


class Rebel extends React.Component {
    render() {
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
                        With the right tools. With the right medium, change is possible.
                        There is strength in Numbers. There is strength in stories. What 
                        gets measured gets done. When stories are well told and numbers 
                        accumulate both a brand and a philosphy can change the course of time.
                    </p>
                    <img className='storylineImage' src={storylineImage} alt='rebel storyline' />
                    <h2 className='iconHeading'>THE ICON</h2>
                    <img className='phase1Image' src={phase1Image} alt='rebel phase 1' />
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