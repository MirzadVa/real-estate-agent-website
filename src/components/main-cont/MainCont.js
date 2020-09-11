import React from 'react';
import './maincont.css';


const MainCont =()=>{
    return(
        <div className='all'>
            <div className='mainCont-cont'>

                

            </div>
            
            <div className='main-headline-cont'>

                <div className='description'>
                    <div className='main-headline'>
                            <h1>FIND YOUR <br/>PERFECT HOME</h1>
                        </div>
                        <div className='headline-desc'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className='button-one'>
                            BROWSE LISTINGS
                        </div>
                </div>
                
                <div className='contact-cont'>
                        <p className='contact-details-first'>Contact an agent</p>
                        <p className='contact-details-one'>Call: (000)111 - 1234</p>
                        <p className='contact-details'>Email <b>email@email.com</b></p>
                        <p className='contact-details'>Visit Adress 1234</p>
                        <button className='register-button-two'>REGISTER FOR FREE</button>
                </div>
               

                

            </div>

            
        </div>
    )
}

export default MainCont;