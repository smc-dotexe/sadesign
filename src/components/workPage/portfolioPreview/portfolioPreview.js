import React from 'react'
import './portfolioPreview.css'
import './responsivePortfolioPreview.css'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
// import Test from '../portfolioPages/test'

class PortfolioPreview extends React.Component {
    constructor(props) {
        super(props)
    }

    portfolioLink = e => {
        console.log('clicked on', this.props.pageId)
        this.props.passPageSelected(this.props.pageId)
    }

    render() {
        const date = this.props.passDateHeading
        const previewHeading = this.props.passPreviewHeading
        const previewImage = this.props.passPreviewImage
        const previewDescription = this.props.passPreviewDescription
        return (
            <Router>
                <div className='portPreviewDiv'>
                    <h3 className='dateHeading'>
                        {date}
                    </h3>
                    <div className='overlay'>
                    <div id={this.props.pageId} className='previewBody'>
                        <img className='previewImage' src={previewImage} alt='portfolio preview' onClick={this.portfolioLink}/>
                        <h1 className='previewHeading' onClick={this.portfolioLink}>{previewHeading}</h1>
                        <p className='previewDescription'>{previewDescription}</p>
                        {/* <p className='previewLink' onClick={this.portfolioLink}>MORE</p> */}
                        <Link to='/work/workingformyself' className='previewLink'>More</Link>
                    </div>
                    </div>
                    {/* <Route path={`/${this.props.pageId}`} component={Test}/> */}
                </div>

            </Router>
        )
    }
}

export default PortfolioPreview