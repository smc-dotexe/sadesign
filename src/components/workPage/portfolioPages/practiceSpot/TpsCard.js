import React from 'react'

export const TpsCard = (props) => {
    const { divName, bannerImg, bannerTitle, bannerDescription } = props.passTpsInfo
    return (
        <div className='tpsCardDiv' id={divName}>
            <img src={bannerImg} alt='banner card'/>
            <p className='tpsCardTitle'>{bannerTitle}</p>
            <p className='tpsCardDescription'>{bannerDescription}</p>
        </div>

    )
}