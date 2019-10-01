import React from 'react'
import './portfolioPreview.css'

class PortfolioPreview extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const date = this.props.passDateHeading
        const previewHeading = this.props.passPreviewHeading
        const previewImage = this.props.passPreviewImage
        const previewDescription = this.props.passPreviewDescription
        return (
            <div className='portPreviewDiv'>
                <h3 className='dateHeading'>
                    {date}
                </h3>
                <div className='previewBody'>
                    <img className='previewImage' src={previewImage} alt='portfolio preview' /> 
                    <h1 className='previewHeading'>{previewHeading}</h1>
                    <p className='previewDescription'>{previewDescription}</p>
                    <p className='previewLink'>MORE</p>
                </div>
            </div>
        )
    }
}

export default PortfolioPreview