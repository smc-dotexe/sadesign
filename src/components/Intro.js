import React from 'react'
import LazyLoad from 'react-lazyload'
import HeaderComp from './headerComp/HeaderComp'
import '../styles/responsiveIntro.css'
import './ironImage.css'

class Intro extends React.Component {
    constructor(props) {
        super(props)
        this.ironImageHd = null
        this.state = {
            introImageLoad: false
        }
    }
    render() {
        return (
            <LazyLoad>
                <div className='slide intro'>
                    <HeaderComp />
                    <div id='quote'>
                        <p id='focusQuote'>
                            "The people that matter realize
                            all that you should focus on
                            is the work"<br />
                            <span id='authorQuote'>&#8212;Jerrod Carmichael, Comedian on the <br/>Tim Ferris Podcast, Ep. 222.
                            </span>
                        </p>
                    </div>
                    <div id='goalDiv'>
                        <h1 id='goal'>My goal is simple
                            &#8212;
                        </h1>
                    </div>
                </div>
            </LazyLoad>
        )
    }
}

export default Intro