import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function ContactUsBar({ id }) {
  return (
    <div className='contact-us' id={id}>
      <div className='contact-us__text'>
        <h2 className='contact-us__header'>
          Clean Soils Solutions{' '}
          <em className='contact-us__text--cursive'>is not&nbsp;</em> your
          typical receiving site{' '}
        </h2>
        <h3 className='contact-us__secondary'>
          Clean Soils Solution is a full service Hydrovac material
          receiving/processing plant servicing operators within the province of
          Ontario, specifically the GTA
        </h3>
      </div>
      <div className='contact-us__button-section'>
        <NavLink to='/contact' className='contact-us__button'>Contact Us</NavLink>
      </div>
    </div>
  );
}

export default ContactUsBar;
