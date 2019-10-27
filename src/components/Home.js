import React from 'react' 
import Intro from './Intro'
import DesignersArt from './DesignersArt'
import DesignTraining from './DesignTraining'
import SmallBusiness from './SmallBusiness'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'



class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
            <div className='homepage'>
                <Intro />
                <DesignersArt passProp={this.props}/>
                {/* <DesignTraining /> */}
                {/* <SmallBusiness /> */}
                <Contact passProp={this.props}/>
            </div>
            </Router>
        )
    }
}

export default Home