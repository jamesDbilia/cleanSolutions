import React from 'react';
import shaker from '../img/shaker.jpg';
function Banner({ img }) {
  return (
    <div className='banner'>
      <img className='banner__img' src={shaker} alt='First slide' />
      <h1 className='banner__header '>Clean Soil Will Get It Done</h1>
      <p className='banner__secondary-header'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis
        sit tempore exercitationem laborum placeat ad. Quam adipisci animi
        dolor!
      </p>
    </div>
  );
}

export default Banner;
