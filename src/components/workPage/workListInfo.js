import workForMySelfImage from '../../images/workForMyselfImage.png'
import renuImage from '../../images/renuPreview.png'
import visualCultureImage from '../../images/visualCulturePreview.png'
import pdbImage from '../../images/pdbPreview.png'
import rebelImage from '../../images/rebelPreview.png'
import crossingImage from '../../images/crossingPreview.png'
import irvingCreaImage from '../../images/irvingCreaPreview.png'
import rumbleImage from '../../images/rumblePreview.png'
import practiceSpotImage from '../../images/practiceSpotPreview.png'
import blurSA from '../../images/blurImages/blurSA.png'
import blurCrossing from '../../images/blurImages/blurCrossing.png'
import blurIrving from '../../images/blurImages/blurIriving.png'
import blurPDB from '../../images/blurImages/blurPDB.png'
import blurRebel from '../../images/blurImages/blurRebel.png'
import blurRenu from '../../images/blurImages/blurRenu.png'
import blurRumble from '../../images/blurImages/blurRumble.png'
import blurVC from '../../images/blurImages/blurVC.png'

const workForMyselfDescription = 
'As a Designer sometimes we fail to design for ourselves. We work oftentimes to build platforms for others to stand out. I thought... "What about me?"'
const renuDescription = 
'The Branding for Renu - Health and Wellness sought to create an icon that represented the yin and the yang of the body moving amongst Lymph'
const visualCultureDescription = 
'Visual Culture Creative Agency brought together different creatives from all walks of life. Photographers, designers, SEO, Web...'
const pdbDescription = 
'Pho Dau Bo was my first shot at creating a comprehensive branding system for my client. By far this project continues to be the most rewarding experiences of my career...'
const rebelDescription =
'Upon beginning my full-time work with Rumble Boxing the owner expressed her vision to create her own marketing agency. I did preliminary research, UI/UX and Strategy. I am the right rebel for the job...'
const crossingDescription = 
'Crossing Dance had been formed out of a Christian Dance academy. Seeking to rebrand but maintain elements of faith I was tasked to create a logo that reflected their... '
const irvingCreaDescription = 
`Having been a fine-arts student I brushed off old skills and incorporated them into new skills. Working from hand-drawn to digital, Irving's dog, Dingo came to be immortalized...`
const rumbleDescription =
`Being an in-house designer at Rumble boxing has allowed me the opportunity to design a wide gambit of digital, print, strategy.`
const practiceSpotDescription = 
`This is an on-going project that is on a mission to create greater accessibility amongst the global b-boy community. Currently the team we hope to launch and test the app admist the community Spring 2020`


export const workInfo = [
    {
        num:1,
        passDateHeading:'06.19',
        passPreviewHeading:'WORK FOR MYSELF',
        passPreviewImage:workForMySelfImage,
        passPreviewDescription: workForMyselfDescription,
        passLoadingImage: blurSA,
        pageId:'workingformyself',   
    },
    {
        num:2,
        passDateHeading:'03.19',
        passPreviewHeading:'RENU YOUR HEALTH',
        passPreviewImage:renuImage,
        passPreviewDescription: renuDescription,
        passLoadingImage: blurRenu,
        pageId:'renu',      
    },
    {
        num:3,
        passDateHeading:'01.19',
        passPreviewHeading:'VISUAL CULTURE',
        passPreviewImage:visualCultureImage,
        passPreviewDescription: visualCultureDescription,
        passLoadingImage: blurVC,
        pageId: 'visualculture',  
    },
    {
        num:4,
        passDateHeading:'12.18',
        passPreviewHeading:'PHO DAU BO',
        passPreviewImage:pdbImage,
        passPreviewDescription: pdbDescription,
        passLoadingImage: blurPDB,
        pageId:'phodaubo',      
    },
    {
        num:5,
        passDateHeading:'03.19',
        passPreviewHeading:'THE REBEL IN ME',
        passPreviewImage:rebelImage,
        passPreviewDescription: rebelDescription,
        passLoadingImage: blurRebel,
        pageId:'rebel',      
    },
    {
        num:6,
        passDateHeading:'07.18',
        passPreviewHeading:'CROSSING',
        passPreviewImage:crossingImage,
        passPreviewDescription: crossingDescription,
        passLoadingImage: blurCrossing,
        pageId:'crossing',      
    },
    {
        num:7,
        passDateHeading:'05.19',
        passPreviewHeading:'IRVING CREA',
        passPreviewImage:irvingCreaImage,
        passPreviewDescription: irvingCreaDescription,
        passLoadingImage: blurIrving,
        pageId:'irvingcrea',    
    },
    {
        num:8,
        passDateHeading:'12.18',
        passPreviewHeading:'RUMBLE GET READY',
        passPreviewImage:rumbleImage,
        passPreviewDescription: rumbleDescription,
        passLoadingImage: blurRumble,
        pageId:'rumble',      
    },
    {
        num:9,
        passDateHeading:'06.19',
        passPreviewHeading:'The Practice Spot',
        passPreviewImage: practiceSpotImage,
        passPreviewDescription: practiceSpotDescription,
        passLoadingImage:practiceSpotImage,
        pageId:'thepracticespot',
    }

]

