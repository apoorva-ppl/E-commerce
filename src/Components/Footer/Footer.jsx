import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo"/>
        <p>SHOPPER</p>
      </div>

      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-container">
        <div className="footer-social-icon">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-social-icon">
          <img src={pinterest_icon} alt="Pinterest" />
        </div>
        <div className="footer-social-icon">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copyright">
       <hr/>
       <p>Copyright @ 2023-All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer;
