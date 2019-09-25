import React from 'react' 
import Intro from './Intro'
import DesignersArt from './DesignersArt'
import DesignTraining from './DesignTraining'
import SmallBusiness from './SmallBusiness'
import Contact from './Contact'


class Home extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log('width', this.props.passWindowWidth)
        return (
            <div className='homepage'>
                <Intro />
                <DesignersArt />
                <DesignTraining />
                <SmallBusiness />
                <Contact />
            </div>
        )
    }
}

export default Home