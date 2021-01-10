import React from 'react'
import './contact.css'
import './responsiveContact.css'
import contactSaMap from '../../images/contactSaMap.png'

class Contact extends React.Component {
    render() {
        return (
            <div className='contactContainer'>
                <div className='slide contactComp'>

                    <p className='contactHeading'>Contact</p>
                    <h2 className='enquiries'>
                        GENERAL ENQUIRIES<br/>
                            <a 
                                className='emailInfo' 
                                href="mailto:info@sarahalonso.com">
                                    INFO@SARAHALONSO.COM
                            </a>
                    </h2>
                    <p className='addressDetails'>
                        STUDIO ADDRESS<br/>
                        U - 101 #342 15 AVE SW<br/>
                        CALGARY, AB<br/>
                        CANADA, T2R 0P9<br />
                    </p>

                    <img 
                        className='map' 
                        src={contactSaMap} 
                        alt='map location' 
                        onClick={() => {window.location.href='/static/media/contactSaMap.e2042256.png'}}
                    />
                </div>
            </div>
        )
    }
}

export default Contact