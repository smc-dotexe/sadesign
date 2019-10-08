import React from 'react'
import './workingForMyself.css'
import './responsiveWorkingForMyself.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import '../../../headerComp/headerstyles.css'
import wfmImage1 from '../../../../images/wfmImage1.png'
import wfmImage2 from '../../../../images/wfmImage2.png'


class WorkingForMyself extends React.Component {
    constructor() {
        super()
            this.state = {
                counter: 0,
            }
    }

    imageChange = () => {
        if(this.state.counter >= 3) {
            this.setState({counter: 0}, ()=> {console.log('if counter=', this.state.counter)})
        } else {
            this.setState({counter: this.state.counter + 1}, ()=> {console.log('else counter', this.state.counter)})
        }
    }

    render() {
        const imageNo = this.state.counter
        return(
            <div className='wfmContainer'>
            <div className='slide workingForMyselfDiv'>
                <HeaderComp />

            </div>
            <div className='wfmDetails'>
                <h1 className='mtom'>
                    M - M<br />
                    <span className='wfmHours'>00:00 - 00:00</span>
                </h1>
                <p className='wfmDescription'>
                    Working as a Freelance Graphic Designer is a 24hr job.
                    Although there are slow times during the dips, those times 
                    are the most creative. When designing is constant and busy, that's when technical
                    skills are developed and honed.<br /><br />
                    When I was looking to redesign my business card, it was more than an opportunity to 
                    create for myself, it is a reflection of myself. Moving from an amateur designer, to that 
                    of a skilled technician.
                </p>
                <div className='wfmImageContainer' onClick={this.imageChange}>
                    {imageNo===0 ? 
                        <img className='wfmImage' id='wfmImage1' src={wfmImage1} alt="cards on mirror" /> :
                        <img className='wfmImageDisplayNone' alt='none' />
                    }
                    {imageNo===1 ? 
                        <img className='wfmImage' id='wfmImage2' src={wfmImage2} alt="cards on mirror" /> :
                        <img className='wfmImageDisplayNone' alt='none' />
                    }
                    <p className='wfmThanks'>
                    - Special thanks to Iriving Crea for helping me<br/> 
                    capture the vision I have for myself and my brand.
                </p>
                <div className='dotContainer'>
                    {imageNo===0 ?
                        <span className='dot'></span>:
                        <span className='dotClear'></span>
                    }
                    {imageNo===1 ?
                        <span className='dot'></span>:
                        <span className='dotClear'></span>
                    }
                    {imageNo===2 ?
                        <span className='dot'></span>:
                        <span className='dotClear'></span>
                    }
                    {imageNo===3 ?
                        <span className='dot'></span>:
                        <span className='dotClear'></span>
                    }
                
                </div>
                </div>

            </div>
            </div>
        )
    }
}

export default WorkingForMyself