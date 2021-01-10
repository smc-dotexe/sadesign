import React from 'react'
import './headerstyles.css'
import './responsiveHeaderStyles.css'

function HeaderComp() {
    return (
        <div 
            className='headerDiv'
        >
            <header>
                <h1 
                    className='sarah'
                    style={{color:'white'}}
                >
                    SARAH
                </h1>
                <h1 
                    className='alonso'
                    style={{color:'white'}}
                >
                    ALONSO
                </h1>
                <h1 className='design'>DESIGN</h1>
            </header>

        </div>
    )
}

export default HeaderComp