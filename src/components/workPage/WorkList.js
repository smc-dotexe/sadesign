import React from 'react'
import './worklist.css'
import './responsiveWorkList.css'
import PortfolioPreview from './portfolioPreview/portfolioPreview'
import workForMySelfImage from '../../images/workForMyselfImage.png'
import renuImage from '../../images/renuPreview.png'
import visualCultureImage from '../../images/visualCulturePreview.png'
import pdbImage from '../../images/pdbPreview.png'
import rebelImage from '../../images/rebelPreview.png'
import crossingImage from '../../images/crossingPreview.png'
import irvingCreaImage from '../../images/irvingCreaPreview.png'
import rumbleImage from '../../images/rumblePreview.png'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom'
import Test from './portfolioPages/test'




class WorkPage extends React.Component {
    constructor() {
        super() 
            this.state = {
                portfolioSelect:''
            }
    }

    pageSelected = (page) => {
        this.setState({portfolioSelect: page}, ()=>{console.log('STATE OF PORTFOLIOSELECT', this.state.portfolioSelect)})
    }
    render() {
        let workForMyselfDescription = 
            'As a Designer sometimes we fail to design for ourselves. We work oftentimes to build platforms for others to stand out. I thought... "What about me?"'
        let renuDescription = 
            'The Branding for Renu - Health and Wellness sought to create an icon that represented the yin and the yang of the body moving amongst Lymph'
        let visualCultureDescription = 
            'Visual Culture Creative Agency brought together different creatives from all walks of life. Photographers, designers, SEO, Web...'
        let pdbDescription = 
            'Pho Dau Bo was my first shot at creating a comprehensive branding system for my client. By far this project continues to be the most rewarding experiences of my career...'
        let rebelDescription =
            'Upon beginning my full-time work with Rumble Boxing the owner expressed her vision to create her own marketing agency. I did preliminary research, UI/UX and Strategy. I am the right rebel for the job...'
        let crossingDescription = 
            'Crossing Dance had been formed out of a Christian Dance academy. Seeking to rebrand but maintain elements of faith I was tasked to create a logo that reflected their... '
        let irvingCreaDescription = 
            `Having been a fine-arts student I brushed off old skills and incorporated them into new skills. Working from hand-drawn to digital, Irving's dog, Dingo came to be immortalized...`
        let rumbleDescription =
            `Being an in-house designer at Rumble boxing has allowed me the opportunity to design a wide gambit of digital, print, strategy.`
        return (
            <Router>
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
                            pageId='workingformyself'
                            passPageSelected={this.pageSelected}
                        />
                    </li>
                    <li>
                        <PortfolioPreview 
                            passDateHeading='03.19'
                            passPreviewHeading='RENU YOUR HEALTH'
                            passPreviewImage={renuImage}
                            passPreviewDescription={renuDescription}
                            pageId='renu'
                            passPageSelected={this.pageSelected}
                        />
                    </li>
                    <li>
                        <PortfolioPreview 
                            passDateHeading='01.19'
                            passPreviewHeading='VISUAL CULTURE'
                            passPreviewImage={visualCultureImage}
                            passPreviewDescription={visualCultureDescription}
                            pageId='visualculture'
                            passPageSelected={this.pageSelected}
                        />
                    </li>
                    <li>
                        <PortfolioPreview 
                            passDateHeading='12.18'
                            passPreviewHeading='PHO DAU BO'
                            passPreviewImage={pdbImage}
                            passPreviewDescription={pdbDescription}
                            pageId='phodaubo'
                            passPageSelected={this.pageSelected}
                        />
                    </li>
                    <li>
                        <PortfolioPreview 
                            passDateHeading='03.19'
                            passPreviewHeading='THE REBEL IN ME'
                            passPreviewImage={rebelImage}
                            passPreviewDescription={rebelDescription}
                            pageId='rebel'
                            passPageSelected={this.pageSelected}
                        />
                    </li>
                    <li>
                        <PortfolioPreview 
                            passDateHeading='07.18'
                            passPreviewHeading='CROSSING'
                            passPreviewImage={crossingImage}
                            passPreviewDescription={crossingDescription}
                            pageId='crossing'
                            passPageSelected={this.pageSelected}
                        />
                    </li>
                    <li>
                        <PortfolioPreview 
                            passDateHeading='05.19'
                            passPreviewHeading='IRVING CREA'
                            passPreviewImage={irvingCreaImage}
                            passPreviewDescription={irvingCreaDescription}
                            pageId='irvingCrea'
                            passPageSelected={this.pageSelected}
                        />
                    </li>
                    <li>
                        <PortfolioPreview 
                            passDateHeading='12.18'
                            passPreviewHeading='RUMBLE GET READY'
                            passPreviewImage={rumbleImage}
                            passPreviewDescription={rumbleDescription}
                            pageId='rumble'
                            passPageSelected={this.pageSelected}
                        />
                    </li>
                </ul>
                {/* <Switch>
                    <Route path={`/work/${this.state.portfolioSelect}`} component={Test} />
                </Switch> */}
            </div>
            </Router>
        )
    }
}

export default WorkPage