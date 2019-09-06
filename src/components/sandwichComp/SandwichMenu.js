import React from 'react'
import './sandwichMenu.css'

class SandwichMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('props display menu', this.props.passDisplayMenu)
        let menuClass;
        if (this.props.passDisplayMenu) {
            menuClass = 'sandwichComp slider'
        } else {
            menuClass ='sandwichComp'
        }
        return (
            <div className='sandwichContainer'>
                    <div className={menuClass}>
                        <p id='sandwichMenuExit' onClick={this.props.passSandwichMenu}>x</p>
                        <h4 id='sandwichSarah'>Sarah</h4><br/>
                        <h4 id='sandwichAlonso'>Alonso</h4>
                        <h4 id='sandwichDesign'>Design</h4>
                        <ul id='sandwichLinks'>
                            <li>About</li>
                            <li>Work</li>
                            <li>Case Study</li>
                            <li>Contact</li>
                        </ul>
                    </div>                
            </div>
        )
    }
}

export default SandwichMenu