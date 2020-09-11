import React from 'react';
import './about.css';
import SearchImg from '../assets/search.png';
import PriceImg from '../assets/price-tag.png';
import PaperImg from '../assets/paper.png';


const About = () =>{
    return(
        <div className='about-wrapper'>
            <div className='about-headline-wrapper'>
                <h3>A Real Estate Agent You Can Trust</h3>
                <p className='desc-one'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>

            <div className='about-card-wrapper'>
                <div className='about-card'>
                    <div className='card-image-wrapper'>
                        <img className='card-image' src={SearchImg} alt={'jedna slika'}/> 
                    </div>
                    <p className='about-card-headline'>BROWSE FOR FREE</p>
                    <p className='about-card-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className='about-card'>
                    <div className='card-image-wrapper'>
                        <img className='card-image' src={PriceImg} alt={'dva'}/> 
                    </div>
                    <p className='about-card-headline'>NO HIDDEN FEES</p>
                    <p className='about-card-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className='about-card'>
                    <div className='card-image-wrapper'>
                        <img className='card-image' src={PaperImg} alt={'tri'}/> 
                    </div>
                    <p className='about-card-headline'>FREE PROPERTY APRAISALS</p>
                    <p className='about-card-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

            </div>

            <div className='agent-button'>FIND AN AGENT</div>

        </div>
    )
}

export default About;