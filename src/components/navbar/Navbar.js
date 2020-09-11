import React, {useState} from 'react';
import './navbar.css';

const Navbar = () =>{
    
    
    const [open, setOpen] = useState(true)
    
    const setClass = () =>{
        setOpen(!open)
    }
    
    return(
        <div className='navbar-container'>

            <div className='nav-holder'>

               
               
                <div className='logo-menu'>
                    <div className='logo-holder'>
                            <h2>Real Estate Agency</h2>
                        </div>
                        <div className='hamburger-holder' onClick={setClass}></div>
                </div>
                    


                <div className='navigation'>
                    <ul className={!open ? 'open' : null}>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Listings</li>
                        <li>Team</li>
                        <li>Landing Page</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navbar;