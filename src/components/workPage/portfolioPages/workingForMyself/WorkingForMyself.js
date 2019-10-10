import React from 'react'
import './workingForMyself.css'
import './responsiveWorkingForMyself.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import '../../../headerComp/headerstyles.css'
import wfmImage1 from '../../../../images/wfmImage1.png'
import wfmImage2 from '../../../../images/wfmImage2.png'
import wfmImage3 from '../../../../images/wfmImage3.png'
import wfmImage4 from '../../../../images/wfmImage4.png'
import wfmImage5 from '../../../../images/wfmImage5.png'


class WorkingForMyself extends React.Component {
    constructor() {
        super()
            this.state = {
                counter: 0,
                imageList: [wfmImage1, wfmImage2, wfmImage3, wfmImage4, wfmImage5]
            }
    }

    imageChange = () => {
        if(this.state.counter >= 4) {
            this.setState({counter: 0})
        } else {
            this.setState({counter: this.state.counter + 1})
        }
    }

    render() {
        const imageNo = this.state.counter
        const imageList = this.state.imageList
        let imageIndex

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
                
                    <img 
                        className='wfmImage' 
                        id={`wfmImage${imageNo}`} 
                        src={imageList[imageNo]} 
                        alt='working for myself image' 
                    />

                    <p className='wfmThanks'>
                    - Special thanks to Iriving Crea for helping me 
                    capture the vision I have for myself and my brand.
                    </p>

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

            </div>
            </div>
        )
    }
}

export default WorkingForMyself