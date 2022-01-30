import React from 'react';
import './book-trip.css'
import TripCard from '../trip-card/trip-card';
import ticimg from './ticketimg.png'
import BookStep from './book-steps/book-steps';
import step1 from './step1.svg'
import step2 from './step2.svg'
import step3 from './step3.svg'

const Tripbook = () => {
    return (
        <div className="book">
            <div className="left">
                <div className="line1">Easy and Fast</div>
                <div className="line2">Book your next trip
                    in 3 easy steps</div>
                <div className='steps'>
                    <BookStep img={step1} heading="Choose Destination" line="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. "></BookStep>
                    <BookStep img={step2} heading="Make Payment" line="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. "></BookStep>
                    <BookStep img={step3} heading="Reach Airport on selected date" line="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. "></BookStep>
                </div>
            </div>
            <div className="right">
                <div className="bg"></div>
                <div className="ticket">
                    <TripCard img={ticimg} tripto='Trip to Greece' tripinfo="14-29 June| by Robbin joseph" people="24 people going"></TripCard>
                </div>
            </div>
        </div>
    )
}

export default Tripbook