import React from 'react'
import './phoDauBo.css'
import './responsivePhoDauBo.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import pdbLogo from '../../../../images/pdbLogo.svg'
import vietKitchen from '../../../../images/vietKitchen.svg'


class PhoDauBo extends React.Component {
    render() {
        return (
            <div className='pdbContainer'>
                <div className='slide phoDauBo'>
                    <HeaderComp />
                    <img className='pdbLogo' src={pdbLogo} alt='pho dau bo logo' />
                    <p className='customerQuote'>
                        "Best pho place in Calgary hands down. Their sate broth is to die for!"
                        <br/><br/>
                        <span className='customerQuoteAuthor'>- Pho Dau Bo Regular.</span>
                    </p>
                </div>'
                <div className='pdbDetails'>
                    <h1 className='pdbHeading'>PHO DAU BO</h1>
                    <p className='pdbDescription'>
                        Pho Dau Bo is proud to be your go-to Vietnamese restaurant in
                        Calgary for traditional Vietnamese cuisine such as Pho, Vermicelli bowls,
                        and Vietnamese subs. Our family run Pho restaurant has been operating in 
                        the community of Forest Lawn of Calgary's SE, also known as International Avenue,
                        since 2008. Pho Dau Bo is expanding our reach by offering Pickup and Delivery options.
                    </p>
                    <img className='vietKitchen' src={vietKitchen} alt='vietnamese kitchen label' />
                    <h2 className='onTheMenuHeading'>ON THE MENU FOR DESIGN</h2>
                    <ul className='designMenuList1'>
                        <li>Logo Design</li>
                        <li>Research</li>
                        <li>Strategy</li>
                        <li>Digital Graphics</li>
                        <li>Print Material Designs</li>
                    </ul>
                    <ul className='designMenuList2'>
                        <li>Main Designs - Main Menu, <br/>Take-out Menu and Dessert</li>
                        <li>Business Cards</li>
                        <li>Outdoor Signage</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PhoDauBo