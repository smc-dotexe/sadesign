import React from 'react'
// import '../styles/contactQuery.css'

class Contact extends React.Component {
    render() {
        return (
            <div className='slide contact'>
                <div className='border'></div>
                <div id='contactInfo'>
                    <h5 id='contactMe'>Contact Me</h5>
                    <p id='contactAddress'>
                        U-101 #342 15Ave, SW<br/>
                        Calgary, AB<br/>
                        Canada, T2R 0P9
                    </p>
                    <p id='contactPhone'>
                        SARAH ALONSO<br/>
                        <span id='phone'>+1403.827.7279</span>
                    </p>
                    <p id='collaborate'>
                        Collaborate
                    </p>
                    <p id='socialMedia'>
                        Facebook<br/>
                        Instagram<br/>
                        LinkedIn<br/>
                    </p>
                    <p id='privacyPolicy'>
                        Privacy Policy 
                    </p>
                    <p id='copyright'>
                        &copy;2019SARAHALONSO&#8212;DESIGN
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact