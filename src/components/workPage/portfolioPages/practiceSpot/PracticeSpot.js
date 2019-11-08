import React from 'react'
import './practiceSpot.css'
import './responsivePracticeSpot.css'
import practiceSpotUserImage from '../../../../images/practiceSpotUserImage.png'
import initialConceptImage from '../../../../images/practiceSpotInitialConcept.png'

class PracticeSpot extends React.Component {
    render() {
        return(
            <div className='practiceSpotContainer'>
                <div className='slide practiceSpot'></div>
                <div className='practiceSpotDetails'>
                    <h1 className='practiceSpotHeading'>
                        The Practice Spot
                    </h1>
                    <p className='practiceSpotDescription'>
                    Breaking is an activity between Art and Sport. It is Art in that a bboy/bgirl 
                    is encouraged to develop an individual style based on fundamental moves without 
                    taking original moves from another member in the community. Breaking is a sport 
                    on the basis that it is a physical activity that can be judged by a panel of 
                    originators or recognized individual dancers of merit. Where this activity differs 
                    from most sports is that although a competitor is to be judged on musicality, 
                    fundamental footwork, showmanship and power originality is the most sought after 
                    acclaim to fame.
                    </p>
                    <h1 className='practiceSpotUserHeading'>The User</h1>
                    <p className='practiceSpotUserDescription'>
                    B-boys are a mobile culture quite literally. These dancers are on the move, always 
                    utilizing gps, social media apps and constantly sharing videos or studying videos online. 
                    Much of Breaking history is itself documented in fragmented videos which are then put to 
                    practice by these dancers.<br/><br/> 

                    The bboy community though international is small in numbers. The reason being is that the 
                    activity itself has a steep barrier to entry preventing participation from a diverse audience. 
                    So, this being considered, Breaking is largely a male user-base. These men range in age from 
                    as young as 8, the most active members are between 12-25 and an older and greatly sparce 
                    generation of ground breakers range in age from 26-50. <br/><br/>

                    Our goal is to laugh the mobile app this coming Spring 2020. In hopes to gauge interest, obtain 
                    sponsorship and gather intelligence as to how to improve later versions of the app.
                    </p>
                    <img className='practiceSpotUserImage' src={practiceSpotUserImage} />

                    <h1 className='initialConceptHeading'>Initial Concept</h1>
                    <p className='initialConceptDescription'>
                    The primary goal of the app is to provide an easy way to post, share and locate breaking practice 
                    spots from around the world. Be it that breakers often travel for competitions finding practice 
                    spots is as important as booking accommodations. 
                    </p>
                    <img className='initialConceptImage' src={initialConceptImage} />

                </div>
            </div>
        )
    }
}

export default PracticeSpot