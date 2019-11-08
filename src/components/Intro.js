import React, { lazy } from 'react'
import LazyLoad from 'react-lazyload'
import '../styles/responsiveIntro.css'
import './ironImage.css'
import saLogo from '../images/sa.png'
import introBG from '../images/introbg.png'
import redArrowDown from '../images/redarrowdown2.png'
import SandwichMenu from './sandwichComp/SandwichMenu'
import HeaderComp from './headerComp/HeaderComp'
import { Spring, Transition, animated } from 'react-spring/renderprops'
// import { url } from 'inspector'
class Intro extends React.Component {
    constructor(props) {
        super(props)
        this.ironImageHd = null
        this.state = {
            introImageLoad: false
        }
    }

    //UNCOMMENT THIS AFTER ADDING XD STUFF////////////////////////////

    // introOnLoad = () => {
    //     console.log('introOnLoad ran')
    //     this.setState({ introImageLoad : true})
    // }

    //UNCOMMENT THIS AFTER ADDING XD STUFF////////////////////////////

    // componentDidMount() {
    //     // document.addEventListener('load', this.introOnLoad())
    //     // this.setState({introImageLoad:true})
    //     // this.introBackground = new Image()
    //     // this.introBackground.src = introBG
    //     // console.log('introbackground.src componentdidmount = ', this.introBackground.src)
        
    //     const loaderImg = new Image()
    //     loaderImg.src = introBG
    //     loaderImg.onload = () => {
    //         this.ironImageHd.setAttribute(
    //             'style',
    //             `background-image: url('${introBG}')`
    //         )
    //         this.ironImageHd.classList.add('iron-image-fade-in')
    //     }
    // }

    // componentDidMount() {
    //     document.addEventListener('load', this.introOnLoad())
    //     // this.setState({ introImageLoad : true })
    //     const introBackground = introBG
    // }

    render() {
        return (
            <LazyLoad>
                {//UNCOMMENT THIS CODE AFTER ADDING XD STUFF
                }
                {/* <div className="iron-image-container">
                
                <div 
                    className="iron-image-loaded" 
                    ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}>
                </div>
                    <h1>LOADED</h1>
                <div 
                    className="iron-image-preload" 
                    // style={{ backgroundImage: `url('${this.props.srcPreload}')` }}
                    style={{backgroundColor: 'blue'}}
                    >
                        <h1>hiiiiiiiiiiii</h1>
                </div>
                
                </div> */}

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