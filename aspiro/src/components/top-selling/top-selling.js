import React from 'react';
import './top-selling.css'
import SellCard from '../sell-card/sell-card';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

const TopSell = () => {
    return (
        <div className="selling">
            <div className="heading">
                TOP SELLING
            </div>
            <div className="line">Top Destinations</div>
            <div className="sell">
                <SellCard img1={img1} location="Rome, Italty" time="10 days trip" price="$5.2k"></SellCard>
                <SellCard img1={img2} location="London, UK" time="12 days trip" price="$4,2k"></SellCard>
                <SellCard img1={img3} location="Full Europe" time="28 days trip" price="$15k"></SellCard>
            </div>

        </div>
    )
}

export default TopSell