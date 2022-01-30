import React from 'react';
import './button.css'
const Button = ({ name, color }) => {
    return (
        <div className='button' style={{ "background": color }}>
            {name}
        </div>
    )
}

export default Button;
