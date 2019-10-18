import React from 'react'
import './rebel.css'
import './responsiveRebel.css'
import HeaderComp from '../../../headerComp/HeaderComp'



class Rebel extends React.Component {
    render() {
        return (
            <div className='rebelContainer'>
                <div className='slide rebel'>
                    <HeaderComp />
                    <p className='steveJobsQuote'>
                        " Great things in business are never done by one person; 
                        they're done by a team of people. "<br/><br/>
                        <span className='steveJobsQuoteAuthor'>
                            - Steve Jobs, CEO & Co-founder of Apple Inc.
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Rebel