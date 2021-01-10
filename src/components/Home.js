import React from 'react' 
import Intro from './Intro'
import DesignersArt from './DesignersArt'
import Contact from './Contact'
import { BrowserRouter as Router } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <Router>
                <div className='homepage'>
                    <Intro />
                    <DesignersArt passProp={this.props}/>
                    <Contact passProp={this.props}/>
                </div>
            </Router>
        )
    }
}

export default Home