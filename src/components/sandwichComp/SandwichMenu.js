import React from 'react'
import './sandwichMenu.css'
import { Spring, } from 'react-spring/renderprops'

class SandwichMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('props display menu', this.props.passDisplayMenu)
        return (
            // <Spring 
            //     from={{ opacity: 0, marginRight: -1000 }}
            //     to={{ opacity: 1, marginRight: 0 }}
            //     leave={{ opacity: 0, marginRight: -1000 }}>
            //     {prop => (
            //         <div style={prop} className='sandwichComp'>
            //             <p id='sandwichMenuExit' onClick={this.props.passSandwichMenu}>x</p>
            //             <h4 id='sandwichSarah'>Sarah</h4><br/>
            //             <h4 id='sandwichAlonso'>Alonso</h4>
            //             <h4 id='sandwichDesign'>Design</h4>
            //             <ul id='sandwichLinks'>
            //                 <li>About</li>
            //                 <li>Personal Branding</li>
            //                 <li>Rumble Boxing</li>
            //                 <li>Work</li>
            //                 <li>Blog</li>
            //                 <li>Contact</li>
            //             </ul>
            //         </div>
            //         )
            //     }
            // </Spring>
            <div className='sandwichContainer'>
            
                { 
                    this.props.passDisplayMenu ? 

                    <div className={`sandwichComp ${this.props.passDisplayMenu ? 'slide-in' : 'slide-out'}`}>
                        <p id='sandwichMenuExit' onClick={this.props.passSandwichMenu}>x</p>
                        <h4 id='sandwichSarah'>Sarah</h4><br/>
                        <h4 id='sandwichAlonso'>Alonso</h4>
                        <h4 id='sandwichDesign'>Design</h4>
                        <ul id='sandwichLinks'>
                            <li>About</li>
                            <li>Personal Branding</li>
                            <li>Rumble Boxing</li>
                            <li>Work</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    : <h1>bye</h1>
                }
            </div>
        )
    }
}

export default SandwichMenu