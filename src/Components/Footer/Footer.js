import React from 'react';
import './Footer.css'
import LOGO from '../../assets/LOGO.png'
import Facebook from '../../assets/icons/Facebook.png'
import Indriver from '../../assets/icons/Indriver.png'
import Instagramm from '../../assets/icons/Instagramm.png'
import Twitter from '../../assets/icons/Twitter.png'
const Footer = () => {
    return (
        <div className='Footer'>
        <footer className="footer">
  <div className="logo"> <br /> <img src={LOGO} alt="" />    </div>
  <div className="company"> 
  <p>Company</p> 
  <p>Team</p>
  <p>Careers</p>
  </div>
  <div className="address"> 
  <p>Address</p> 
  <p>22 rue Chapon</p>
  <p>75003 Paris</p>
  </div>
  <div className="contact"> 
  <p>Contact</p> 
  <p>Get in touch</p>
  </div>
  <div className="social">
  <img src={Instagramm} alt="" />
  <img src={Facebook} alt="" />
  <img src={Twitter} alt="" />
  <img src={Indriver} alt="" />
  <p></p>
  <p>Nabla Technologies - 2020</p>
  <p>All Rights reserved</p>
  <p>Legal notice - T&C</p>
  </div>
</footer>
</div>
    );
}

export default Footer;
