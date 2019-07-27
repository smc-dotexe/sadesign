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
            </div>
        )
    }
}

export default SandwichMenu