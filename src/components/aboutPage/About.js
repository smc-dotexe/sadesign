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
            <div className='mySkillsDiv'>
                <h1 className='mySkillsHeading'>My Skills</h1>
                <ul className='mySkillsList1'>
                   <li>Adobe CC</li>
                   <li>Informational Architecture Development</li>
                   <li>Digital Graphics - Digital & Print</li>
                   <li>Brand Development & Strategy</li>
                   <li>WireFraming</li>
                </ul>
                <ul className='mySkillsList2'>
                    <li>Flow Charting</li>
                    <li>High Fidelity Prototyping</li>
                    <li>Logo Design</li>
                    <li>High focus on Typography</li>
                    <li>Social Media Content Creation</li>
                    <li>HTML, CSS</li>
                </ul>
            </div>
        </div>
    )
    }
}

export default About