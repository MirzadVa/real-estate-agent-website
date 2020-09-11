import React from 'react';
import './listing-cards.css';

function ListingCards() {
    return (
        <div className='listing-cards-wrapper'>

            <div className='listing-card'>

                <div className='card-image-holder'>

                </div>
                <div className='card-button'>WIEW LISTING</div>
                <div className='card-info-holder'>
                    <p>Adress BA</p>
                    <h2>$954,000</h2>
                    <p>Rooms 3</p>
                    <p>Hood</p>
                    <p>Adress San Francisco 1234</p>
                </div>

            </div>

            <div className='listing-card'>

            <div className='card-image-holder' id='two'>

            </div>
            <div className='card-button' >WIEW LISTING</div>
            <div className='card-info-holder'>
                <p>Adress BA</p>
                <h2>$654,000</h2>
                <p>1,645ft • 2 Floor • 2 Entry</p>
                <p style={{color:'blue'}}>1234 Adress One</p>
                <p style={{color:'blue'}}>Adress San Francisco 1234</p>
            </div>

            </div>

             <div className='listing-card'>

                <div className='card-image-holder' id='three'>

                </div>
                <div className='card-button'>WIEW LISTING</div>
                <div className='card-info-holder'>
                    <p>Adress BA</p>
                    <h2>$1,012,895</h2>
                    <p>1,645ft • 2 Floor • 2 Entry</p>
                    <p style={{color:'blue'}}>1234 Adress One</p>
                    <p style={{color:'blue'}}>Adress San Francisco 1234</p>
                </div>

            </div>

             <div className='listing-card'>

                <div className='card-image-holder' id='four'>

                </div>
                <div className='card-button'>WIEW LISTING</div>
                <div className='card-info-holder'>
                    <p>Adress BA</p>
                    <h2>$954,000</h2>
                    <p>1,645ft • 2 Floor • 2 Entry</p>
                    <p style={{color:'blue'}}>1234 Adress One</p>
                    <p style={{color:'blue'}}>Adress San Francisco 1234</p>
                </div>

            </div>

             <div className='listing-card'>

                <div className='card-image-holder' id='five'>

                </div>
                <div className='card-button'>WIEW LISTING</div>
                <div className='card-info-holder'>
                    <p>Adress BA</p>
                    <h2>$302,000</h2>
                    <p>1,645ft • 2 Floor • 2 Entry</p>
                    <p style={{color:'blue'}}>1234 Adress One</p>
                    <p style={{color:'blue'}}>Adress San Francisco 1234</p>
                </div>

            </div>

             <div className='listing-card'>

                <div className='card-image-holder' id='six'>

                </div>
                <div className='card-button'>WIEW LISTING</div>
                <div className='card-info-holder'>
                    <p>Adress BA</p>
                    <h2>$854,302</h2>
                    <p>1,645ft • 2 Floor • 2 Entry</p>
                    <p style={{color:'blue'}}>1234 Adress One</p>
                    <p style={{color:'blue'}}>Adress San Francisco 1234</p>
                </div>

            </div>
        </div>
    )
}

export default ListingCards
