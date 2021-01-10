import React from 'react'
import './phoDauBo.css'
import './responsivePhoDauBo.css'
import HeaderComp from '../../../headerComp/HeaderComp'
import pdbLogo from '../../../../images/pdbLogo.svg'
import vietKitchen from '../../../../images/vietKitchen.svg'
import pdbMenuFoldout from '../../../../images/pdbMenuFoldOut.png'
import pdbMenuFoldout2 from '../../../../images/pdbMenuFoldOut2.png'
import pdbLayout from '../../../../images/pdbLayout.png'
import vietKitchen2 from '../../../../images/pdbVietKitchen2.svg'
import vietKitchenMobile from '../../../../images/pdbVietKitchenMobile.svg'
import pdbMenuFoldoutMobile from '../../../../images/pdbMenuFoldOut_Mobile.png'
import pdbMenuFoldout2Mobile from '../../../../images/pdbMenuFoldOut2_Mobile.png'
import pdbMenuFoldout2Tablet from '../../../../images/pdbMenuFoldOut2_Tablet.png'



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
                    <img className='vietKitchenMobile' src={vietKitchenMobile} alt='vietnamese kitchen label' />
                    <div className='onTheMenuDiv'>
                        <h2 className='onTheMenuHeading'>WHAT'S ON THE MENU FOR DESIGN</h2>
                        <ul className='designMenuList1'>
                            <li>Logo Design</li>
                            <li>Retail Design</li>
                            <li>Sticker Design</li>
                            <li>Creation of Digital and Print Assets</li>
                            <li>Print Material Designs</li>
                        </ul>
                        <ul className='designMenuList2'>
                            <li>Main Designs - Main Menu, <br/>Take-out Menu and Dessert</li>
                            <li>Business Cards</li>
                            <li>Outdoor Signage</li>
                        </ul>
                    </div>
                    <img className='pdbMenu1' src={pdbMenuFoldout} alt='menu foldout' />
                    <img className='pdbMenu1_Mobile' src={pdbMenuFoldoutMobile} alt='menu foldout' />
                    {/* <img className='pdbMenu1_Tablet' src={pdbMenuFoldoutTablet} alt='menu foldout' /> */}
                    <h1 className='pdbHeading2'>PHO DAU BO</h1>
                    <img className='pdbMenu2' src={pdbMenuFoldout2} alt='menu foldout 2' />
                    <img className='pdbMenu2_Mobile' src={pdbMenuFoldout2Mobile} alt='menu foldout' />
                    <img className='pdbMenu2_Tablet' src={pdbMenuFoldout2Tablet} alt='menu foldout' />


                    <p className='pdbMenuDescription'>
                        The biggest challenge of this project was to condense
                        an 8-page-slip-cover-flip-menu into a modern one page menu.
                        Also taken into consideration is that the client wanted to retain both 
                        Vietnamese spelling of the menu items alongside the English titles and
                        descriptions.
                    </p>
                    <img className='vietKitchen2' src={vietKitchen2} alt='viet kitchen label' />
                    <img className='pdbLayoutImage' src={pdbLayout} alt='layout of items' />
                </div>
            </div>
        )
    }
}

export default PhoDauBo