import React from 'react';
import './description.css'
import Button from '../button/button'
import PlayCircle from '../../Ellipse 8.svg'

const Description = () => {
    return (
        <div className="desc">
            <div className="first">BEST DESTINATIONS AROUND THE WORLD</div>
            <div className='second'>Travel,enjoy and live a new and full life</div>
            <div className='third'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam reiciendis assumenda beatae velit, distinctio officiis, facilis perspiciatis impedit iste cum corporis earum porro aliquam delectus rerum reprehenderit blanditiis laudantium.</div>
            <div className="buttons">
                <Button name="Find out more" color="#F1A501" className="desc-button"></Button>
                <div className='play'><img className="img" src={PlayCircle} alt="" /><div className="demo">Play Demo</div></div>

            </div>


        </div>
    )
}

export default Description