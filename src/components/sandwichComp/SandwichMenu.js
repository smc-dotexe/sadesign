import React from 'react'
import './sandwichMenu.css'

class SandwichMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='sandwichComp'>
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
        )
    }
}

export default SandwichMenu