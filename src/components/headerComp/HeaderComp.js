import React from 'react'
import './headerstyles.css'
import './responsiveHeaderStyles.css'

function HeaderComp(props) {

    const bgImage = props.passBgImage
    return (
        <div 
            className='headerDiv'
            // style={{backgroundImage:`url(${bgImage})`}}
        >
            <header>
                <h1 className='sarah'>SARAH</h1>
                <h1 className='alonso'>ALONSO</h1>
                <h1 className='design'>DESIGN</h1>
            </header>

        </div>
    )
}

export default HeaderComp