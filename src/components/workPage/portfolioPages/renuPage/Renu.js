import React from 'react'
import './renu.css'
import './responsiveRenu.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import arrowBlackDown from '../../../../images/arrowBlackDown.png'
import renu1 from '../../../../images/renu1.png'
import renu2 from '../../../../images/renu2.png'
import renu3 from '../../../../images/renu3.png'
import renu4 from '../../../../images/renu4.png'

class Renu extends React.Component {
    constructor() {
        super() 
            this.state = {
                counter: 0,
                imageList: [renu1, renu4, renu2, renu3]
            }
    }

    imageChange = () => {
        if (this.state.counter >=3) {
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
            <div className='renuContainer'>
                <div className='slide renuDiv'>
                    <HeaderComp />
                    <p className='renuDefinition'>
                        RENU:/r
                        <span className='renu_e'>&#477;'</span>
                        n(y)
                        <span className='renu_o'>o&#x305;</span>
                        o/-verb<br/>
                        Give fresh life or
                        stength to.
                    </p>
                    <img className='arrowBlackDown' src={arrowBlackDown} alt='down arrow' />
                </div>
                <div className='renuDetails'>
                    <h1 className='renuHeading'>RENU</h1>
                    <p className='renuDescription'>
                        Renu Health and Wellness is a Calgary based Massage Therapy clinic
                        dedicated to helping clients resume, and re-establish emotional well 
                        being and physical activity by using a combination therapy approach. We 
                        are committed to the understanding that there is no single approach that
                        is the right one for every person. <br/><br/>
                        A blend of science and art, Massage Therapy will help you reduce or 
                        eliminate pain and muscle tension, improve mobility, and improve the bodies
                        Lymphatic System.
                    </p>
                    <div className='renuImageContainer' onClick={this.imageChange}>
                        <img 
                            className='renuImage' 
                            src={imageList[imageNo]} 
                            alt='renu card' />
                        <p className='renuThanks'>
                            - Special thanks to Irving Crea for helping me 
                            capture the subtleties of this business card.
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

export default Renu