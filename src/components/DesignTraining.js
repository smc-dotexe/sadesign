import React from 'react'
import '../styles/responsiveDesignTraining.css'
// import rumbleGram1 from '.././images/rumble-gram1.png'
// import rumbleGram2 from '.././images/rumblegram2.jpg'
import redBoxArrowRight from '../images/redboxarrowright.png'

class DesignTraining extends React.Component {
    constructor() {
        super()
        this.state = {
            slideshow: false,
        }
    }

    slideshow = () => {
        this.setState(prevState => ({slideshow:!prevState.slideshow}))
    }



    render() {
        return (
            <div className='slide designTraining'>
                <div id='dtDescriptorDiv'>
                    <h3 id='designTrainingTitle'>Design Training</h3><br />
                    <p id='dtDescription'>Training like a champion requires 
                    discipline, dedication and design. Rumble 
                    Boxing has been the Freddie Roach 
                    training experience. It has honed a 
                    strategic marketing mind, a team player 
                    attitude and a technical design hand 
                    comparable to Ali.</p>
      
                    
                    <img id='redBoxArrowRight' src={redBoxArrowRight} alt='right red arrow' />
                    
                    <h3 id='rumbleCaseStudyHeader'>RUMBLE</h3>
                </div>
                <div id='rumbleSlideShow' onClick={this.slideshow}>
                    {this.state.slideshow ? 
                        <div id="rumbleGram1"></div>
                        : 
                        <div id="rumbleGram1None"></div>                       
                    }
                    {this.state.slideshow ?                    
                        <div id="rumbleGram2None"></div>
                        :
                        <div id="rumbleGram2"></div>                   
                    }
                    <div id='slideShowCircles'>
                    {this.state.slideshow ? 
                        <span className='dot'></span> :
                        <span className='dotClear'></span>
                    }

                    {this.state.slideshow ?
                        <span className='dotClear'></span> :
                        <span className='dot'></span>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignTraining