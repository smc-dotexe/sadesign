import React from 'react'
import './portfolioPreview.css'
import './responsivePortfolioPreview.css'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import { SimpleImg } from 'react-simple-img'



class PortfolioPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    onImageLoad = () => {
        this.setState({ loaded: true })
    }

    render() {
        
        const { 
            passDateHeading, passPreviewHeading, 
            passPreviewImage, passPreviewDescription,
            passLoadingImage
        } = this.props

        return (
                <div className='portPreviewDiv'>
                    <h3 className='dateHeading'>
                        {passDateHeading}
                    </h3>
                    <div className='overlay'>
                    <div id={this.props.pageId} className='previewBody'>
             
                        <img
                            className='previewImage' 
                            src={passPreviewImage} 
                            alt='portfolio preview' 
                            onLoad={this.onImageLoad}
                            onClick={
                                ()=>this.props.passProps.history
                                    .push(`${this.props.passProps.match.url}/${this.props.pageId}`)
                                }
                        />
                        {!this.state.loaded && 
                            <img 
                                className='previewImageOverlay'
                                src={passLoadingImage}
                            />
                        }
              
                        <h1 
                            className='previewHeading' 
                            onClick={
                                ()=>this.props.passProps.history
                                    .push(`${this.props.passProps.match.url}/${this.props.pageId}`)
                                }
                        >
                            {passPreviewHeading}
                        </h1>
                        <p className='previewDescription'>{passPreviewDescription}</p>
                        <Link 
                            to={`${this.props.passProps.match.url}/${this.props.pageId}`} 
                            className='previewLink' 
                        >
                            More
                        </Link>
                    </div>
                    </div>
                </div>
        )
    }
}





export default PortfolioPreview