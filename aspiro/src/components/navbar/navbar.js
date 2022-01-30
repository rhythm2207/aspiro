import React from 'react';
import './navbar.css'
import down from './chevron-down-solid.svg'
import logo from './Jadoo.svg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" className='logo1' />
            </div>
            <div className='items'>
                <a href="#" className="item">Destinations</a>
                <a href="#" className="item">Hotels</a>
                <a href="#" className="item">Flights</a>
                <a href="#" className="item">Bookings</a>
                <a href="#" className="item">Login</a>
                <a href="#" className="item">Sign up</a>
                <a href="#" className="item drop" >EN <img src={down} alt="" className='svg' /></a>

            </div>

        </div>
    )
}

export default Navbar