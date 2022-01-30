import React from 'react'
import './trip-card.css'
import leaf from './leaf.svg'
import map from './map.svg'
import send from './send.svg'
import vector from './Vector.svg'
import add from './add.svg'
const TripCard = ({ img, tripto, tripinfo, people }) => {
    return (
        <div className="tripcard">
            <div className='imgcon'><img src={img} alt="" className="ticimg" /></div>
            <div className="tripto">{tripto}</div>
            <div className="tripinfo">{tripinfo}</div>
            <div className="logos">
                <img src={leaf} className="triplogo" alt="" />
                <img src={map} className="triplogo" alt="" />
                <img src={send} className="triplogo" alt="" />
            </div>
            <div className="add"><img src={add} alt="" /></div>
            <div className="tripinfo"><img src={vector} alt="" />{people}</div>
        </div>
    )
}

export default TripCard