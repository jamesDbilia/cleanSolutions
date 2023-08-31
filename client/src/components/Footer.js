import React from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
function Footer(props) {
  return (
    <section className='footer'>
      <div className='footer__main'>
        <div className='footer__column footer__column--1'>
          <img src={logo} alt='Logo' className='footer__logo' />
          <p className='footer__info'>Global Contact 1-877-267-3434</p>
          <p className='footer__info'>Integrity Hotline 1-877-318-9783</p>
          <p className='footer__info'>
            Health, Safety & Environment hse@bos-solutions.com
          </p>
        </div>
        <div className='footer__column footer__column--2'>
          <h3 className='footer__location footer__location--1'>East</h3>
          <p className='footer__location footer__location--info '>
            45 Comstock Road, Scarborough,<br></br> ON M1L 2G7 (416-231-4333)
          </p>
        </div>
        <div className='footer__column footer__column--3'>
          <h3 className='footer__location footer__location--2'>West</h3>
          <p className='footer__location footer__location--info '>
            85 Vickers Road, Etobicoke, <br></br>ON M9B 1C1 (416-231-4333)
          </p>
        </div>
      </div>
      <div className='footer__end'>
        <p className='footer__copyright'>
          © Copyright 2016-2020. All Rights Reserved.
        </p>
        <div className='footer__links'>
          <Link to='/terms' className='footer__link'>
            Terms of Use
          </Link>
          <Link className='footer__link'>Privacy Policy</Link>
          <Link className='footer__link'>Documents</Link>
          <Link to='/contact' className='footer__link'>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
