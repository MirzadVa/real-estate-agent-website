import React from 'react';
import './offers.css';
import ListingCards from '../listing-cards/ListingCards';

function Offers() {
    return (
        <div className='offers-wrapper'>

            <div className='about-headline-wrapper'>
                <h3>Recent Listings</h3>
                <p className='desc-one'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>
            </div>
            <ListingCards />
        </div>
    )
}

export default Offers
