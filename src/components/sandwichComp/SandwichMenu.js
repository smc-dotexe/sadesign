import React from 'react'
import './sandwichMenu.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AboutPage from '../aboutPage/About.js'

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