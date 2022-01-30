import React from 'react';
import './book-steps.css'

const BookStep = ({ img, heading, line }) => {
    return (
        <div className="step">
            <div className="steplo">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <div className="head1">{heading}</div>
                <div className="explain">{line}</div>
            </div>
        </div>
    )
}

export default BookStep