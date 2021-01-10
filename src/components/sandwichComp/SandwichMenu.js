/* eslint-disable no-useless-constructor */
import React from 'react'
import './sandwichMenu.css'
import { BrowserRouter as Router} from 'react-router-dom'

class SandwichMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                {/* <div className='sandwichContainer'>
                        <div className={menuClass}>
                            <p id='sandwichMenuExit' onClick={this.props.passSandwichMenu}>x</p>
                            <h4 id='sandwichSarah'>Sarah</h4><br/>
                            <h4 id='sandwichAlonso'>Alonso</h4>
                            <h4 id='sandwichDesign'>Design</h4>
                            <ul id='sandwichLinks'>
                                <li><Link to='/about'>About</Link></li>
                                <li>Work</li>
                                <li>Case Study</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    <Switch>   
                    <Route path='/about' component={AboutPage} />
                    </Switch>             
                </div> */}
            </Router>
        )
    }
}

export default SandwichMenu