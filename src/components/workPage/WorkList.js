import React from 'react'
import './worklist.css'
import './responsiveWorkList.css'
import PortfolioPreview from './portfolioPreview/portfolioPreview'
import workForMySelfImage from '../../images/workForMyselfImage.png'


class WorkPage extends React.Component {
    render() {
        let workForMyselfDescription = 
            'As a Designer sometimes we fail to design for ourselves. We work oftentimes to build platforms for others to stand out. I thought... "What about me?"'
        return (
            <div className='workDiv'>
                <h1 className='workPageHeading'>
                    It's about the Work.
                </h1>
                <ul className='workList'>
                    <li>
                        <PortfolioPreview 
                            passDateHeading='06.19'
                            passPreviewHeading='WORK FOR MYSELF'
                            passPreviewImage={workForMySelfImage}
                            passPreviewDescription={workForMyselfDescription}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default WorkPage