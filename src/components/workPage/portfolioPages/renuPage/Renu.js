import React from 'react'
import './renu.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import arrowBlackDown from '../../../../images/arrowBlackDown.png'
import renuImage1 from '../../../../images/renuImage1.svg'


class Renu extends React.Component {
    render() {
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
                        Give fresh life or <br/>
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
                    <div className='renuImageContainer'>
                        <img className='renuImage' src={renuImage1} alt='first renu image' />
                        <p className='renuThanks'>
                            - Special thanks to Irving Crea for helping me 
                            capture the subtleties of this business card.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Renu