import React from 'react'
import './about.css'
import './responsiveAboutStyles.css'
import HeaderComp from '../headerComp/HeaderComp'
import test from '../../images/pdb.png'

class About extends React.Component {
    render() {
    return (
        <div className='slide aboutDiv'>
            <HeaderComp passBgImage={test}/>
            <h1 className='aboutDesignersArt'>
                The Designer's <br/>Art
            </h1>
            <p className='aboutDescription'>
            I aim to improve the world around me through human centred design.
            I approach projects with empathy and intuition. Equipped with a thirst
            for information and a knack for research I tackle tough design
            challenges with an ambition to produce good design and a need to 
            make an impact.
            </p>
        </div>
    )
    }
}

export default About