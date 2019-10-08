import React from 'react'
import './portfolioPreview.css'
import './responsivePortfolioPreview.css'
import { Link } from 'react-router-dom'

function PortfolioPreview (props) {
    
        const { 
            passDateHeading, passPreviewHeading, passPreviewImage, passPreviewDescription 
        } = props

        return (
                <div className='portPreviewDiv'>
                    <h3 className='dateHeading'>
                        {passDateHeading}
                    </h3>
                    <div className='overlay'>
                    <div id={props.pageId} className='previewBody'>
                        <img 
                            className='previewImage' 
                            src={passPreviewImage} 
                            alt='portfolio preview' 
                            onClick={
                                ()=>props.passProps.history
                                    .push(`${props.passProps.match.url}/${props.pageId}`)
                                }
                        />
                        <h1 
                            className='previewHeading' 
                            onClick={
                                ()=>props.passProps.history
                                    .push(`${props.passProps.match.url}/${props.pageId}`)
                                }
                        >
                            {passPreviewHeading}
                        </h1>
                        <p className='previewDescription'>{passPreviewDescription}</p>
                        <Link 
                            to={`${props.passProps.match.url}/${props.pageId}`} 
                            className='previewLink' 
                        >
                            More
                        </Link>
                    </div>
                    </div>
                </div>
        )
    }


export default PortfolioPreview