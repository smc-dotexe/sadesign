import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h1>contact</h1>
                <div id='contactBorder'></div>
                <div id='contactInfo'>
                    <h5 id='contactMe'>Contact Me</h5>
                    <p id='contactAddress'>
                        U-101 #342 15Ave, SW<br/>
                        Calgary, AB<br/>
                        Canada, T2R 0P9
                    </p>
                    <p id='contactPhone'>
                        +1403.827.7279<br/>
                        SARAH ALONSO
                    </p>
                    <p id='collaborate'>
                        Collaborate
                    </p>
                    <p id='socialMedia'>
                        Facebook<br/>
                        Twitter<br/>
                        Instagram<br/>
                        LinkedIn<br/>
                    </p>
                    <p id='privacyPolicy'>
                        Privacy Policy 
                    </p>
                    <p id='copyright'>
                        &copy;SARAHALONSO&#8212;DESIGN
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact