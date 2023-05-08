import React from 'react';
import './Header.css'
import LOGO from '../../assets/LOGO.png'
import VectoDown from '../../assets/icons/VectorDown.png'

const Header = () => {
    return (
        <header>
         <div className="HeaderConteiner LOGO">
            <img src={LOGO} alt="" />
         </div>
         <div className="HeaderConteiner NAVBAR">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Vision</li>
                    <li>Team</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
            </nav>
         </div>
         <div className="HeaderConteiner LENG">
            <p>EN <img className='VectorDown' src={VectoDown}/></p>
            <button className='GetEarlyAccess'>Get early access</button>
         </div>
        </header>
    );
}

export default Header;
