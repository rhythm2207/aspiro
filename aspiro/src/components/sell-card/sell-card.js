import React from 'react'
import './sell-card.css'
import vector from './Vector.svg'

const SellCard = ({ img1, location, time, price }) => {
    return (
        <div className="sellcard" >
            <div className="bgimg" style={{ background: "url(" + img1 + ")" + "center center " }}></div>
            <div className="info">
                <div className="loprice">
                    <div className="location">{location}</div>
                    <div className="price">{price}</div>
                </div>
                <div className="time"><img src={vector} className='vector' alt="" />{time}</div>
            </div>
        </div>
    )
}

export default SellCard