import React from 'react'
import redArrow from '../images/redarrowright.png'
import '../styles/responsiveDesignersArt.css'

class DesignersArt extends React.Component {
    render() {
        return (
            <div className='slide designersArt'>
                <h1 id='goodDesignTitle'>Good Design</h1>
                    <div id='daBG'>
                        <h1 id='daBGQuote'>"If you want
                            momentum, you'll 
                            have to create it yourself, right now."
                        </h1>
                    
                        <p id='daAuthor'> &#8212; Ryan Holiday, Author of The Obstacle Is The Way, 2014.</p>
                        <p 
                            id='myBrand'
                            onClick={()=> this.props.passProp.history.push('/work')}
                        >
                            The Work
                        </p>
                        <img 
                            id='arr2' 
                            src={redArrow} 
                            alt='redarrow' 
                            onClick={()=> this.props.passProp.history.push('/work')}
                        />
                    </div>
            </div>
        )
    }
}

export default DesignersArt