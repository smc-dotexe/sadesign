import React from 'react'
import './contact.css'
import './responsiveContact.css'
import contactMap from '../../images/contactMap.png'

class Contact extends React.Component {
    render() {
        return (
            <div className='contactContainer'>
                <div className='slide contactComp'>
                    <p className='contactHeading'>Contact</p>
                    <h2 className='enquiries'>
                        GENERAL ENQUIRIES<br/>
                        <span className='emailInfo'>
                            INFO@SARAHALONSO.COM
                        </span>
                    </h2>
                    <p className='addressDetails'>
                        STUDIO ADDRESS<br/>
                        U - 101 #342 15 AVE. SW<br/>
                        CALGARY, AB<br/>
                        CANADA, T2R 0P9<br />
                    </p>
                    <img className='map' src={contactMap} alt='map location'/>
                </div>
            </div>
        )
    }
}

export default Contact