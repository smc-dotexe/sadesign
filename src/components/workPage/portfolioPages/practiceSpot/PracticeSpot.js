import React from 'react'
import './practiceSpot.css'
import './responsivePracticeSpot.css'

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
                </div>
            </div>
        )
    }
}

export default PracticeSpot