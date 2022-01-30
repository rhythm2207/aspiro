import React from 'react';
import './cate-cards.css'

const CateCard = ({ image, name, para }) => {
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt="" className='svg2' />
            </div>
            <div className="name1">
                {name}
            </div>
            <div className="para">{para}</div>
            <div className="hover"></div>
        </div>
    )
}

export default CateCard