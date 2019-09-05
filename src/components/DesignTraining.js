import React from 'react'
import rumbleGram1 from '.././images/rumble-gram1.png'
import rumbleGram2 from '.././images/rumblegram2.jpg'
import redBoxArrowRight from '.././images/redboxarrowright.png'

class DesignTraining extends React.Component {
    constructor() {
        super()
        this.state = {
            slideshow: false,
        }
    }

    slideshow = () => {
        // this.setState(prevState => ({slideshow:!prevState.slideshow}))
        this.setState({slideshow: !this.state.slideshow}, ()=>{console.log(this.state.slideshow)})
    }



    render() {
        return (
            <div className='slide designTraining'>
                <div id='dtBorder'></div>
                <div id='dtDescriptorDiv'>
                    <h3 id='designTrainingTitle'>Design Training</h3><br />
                    <p id='dtDescription'>Training like a champion requires <br/>
                    discipline, dedication and design. Rumble <br/>
                    Boxing has been the Freddie Roach <br/>
                    training experience. It has honed a <br/>
                    strategic marketing mind, a team player <br/>
                    attitude and a technical design hand <br/>
                    comparable to Ali.</p>
      
                    
                    <img id='redBoxArrowRight' src={redBoxArrowRight} alt='right red arrow' />
                    
                    <h3 id='rumbleCaseStudyHeader'>RUMBLE CASE STUDY</h3>
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
                    <div>
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