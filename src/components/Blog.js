import React from 'react'
import dualGlitch from '.././images/pdbDualGlitch.png'
import saPic from '.././images/sapic.png'

class Blog extends React.Component {
    render() {
        return(
            <div className='slide blog'>
                <div id='blogBorder'></div>
                <img id='blogGlitch' src={dualGlitch} alt='glitch'/>
                <img id='saPic' src={saPic} alt='Sarah' />
                <div id='blogDescription'>
                    <h3>
                        HOW TO BE A GRAPHIC DESIGNER<br/>
                        WITHOUT LOSING YOUR SOUL
                    </h3>
                    <p>The people that matter realize that all that you should<br/>
                    focus on is the work. The work of a Designer or User<br/>
                    Experience expert is not strictly the creation of visual<br/>
                    assets. Design requires determining and<br/>
                    understanding the needs of a client and their patrons,<br/>
                    research, strategy, planning, teamwork and study. The<br/>
                    work takes place at all hours M-M.
                    </p>
                    <h3 id='blogLink'>Blog --></h3>
                </div>
            </div>
        )
    }
}

export default Blog