import React from 'react'
import rumbleGram1 from '.././images/rumble-gram1.png'
import rumbleGram2 from '.././images/rumblegram2.jpg'

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
                <div id='dtBorder'></div>
                <div id='dtDescriptorDiv'>
                    <h3>Design Training</h3>
                    <p>Training like a champion requires <br/>
                    discipline, dedication and design. Rumble <br/>
                    Boxing has been the Freddie Roach <br/>
                    training experience. It has honed a <br/>
                    strategic marketing mind, a team player <br/>
                    attitude and a technical design hand <br/>
                    comparable to Ali.</p>
                    <div id='arrowBlock'></div>
                    <h3>RUMBLE CASE STUDY</h3>
                </div>
                <div id='rumbleSlideShow' onClick={this.slideshow}>
                    {this.state.slideshow ? 
                        <div className='slideShowImage'>
                            <img id='rumbleGram1' src={rumbleGram1} alt='rumble1' />
                        </div> : 
                        <div className='slideShowImage'>
                            <img id='rumbleGram2' src={rumbleGram2} alt='rumble2' />
                        </div>
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
                        {/* <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span>  */}
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignTraining