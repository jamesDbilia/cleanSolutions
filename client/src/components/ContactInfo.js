import React from 'react';
import sprite from '../img/sprite.svg';
function ContactInfo(props) {
  return (
    <div className='contact-info__section'>
      <h2 className='contact-info__header'>Contact Us Anytime</h2>
      <p className='contact-info__paragraph--1 contact-info__paragraph'>
        Feel free to contact us for sales, inquiries or any other general
        questions you may have.{' '}
      </p>
      <h4 className='contact-info__secondary-header'>The Office</h4>
      <div className='contact-info__info contact-info__info--phone'>
        <svg className='contact-info__icon'>
          <use href={sprite + '#icon-phone'}></use>
        </svg>
        <p className='contact-info__details'>Main Office: 416-231-4333</p>
      </div>
      <div className='contact-info__info contact-info__info--email'>
        {' '}
        <svg className='contact-info__icon'>
          <use href={sprite + '#icon-email'}></use>
        </svg>
        <a
          href='mailto:info@cleansoils.ca'
          target='_blank'
          rel='noopener noreferrer'
          className='contact-info__details contact-info__details--email'
        >
          Email: info@cleansoils.ca
        </a>
      </div>
      <p className='contact-info__paragraph--2 contact-info__paragraph'>
        Please see the map above listing our locations in Toronto.
      </p>
    </div>
  );
}

export default ContactInfo;
