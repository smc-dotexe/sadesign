import React, { lazy } from 'react'
import './worklist.css'
import './responsiveWorkList.css'
import PortfolioPreview from './portfolioPreview/portfolioPreview'
import { workInfo } from './workListInfo'


function WorkPage (props) {
    // const WorkPage = lazy(() => import('./WorkList'))
        return (
            <div className='workDiv'>
                <h1 className='workPageHeading'>
                    It's about the Work.
                </h1>
                <ul className='workList'>
                    {workInfo.map(info => {
                       return (
                        <li key={info.num}>
                            <PortfolioPreview
                                passProps={props}
                                {...info} 
                            />
                        </li>)
                    })}
                </ul>
            </div>
        )
    }


export default WorkPage