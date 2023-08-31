import React from 'react';
import { useDropzone } from 'react-dropzone';
import sprite from '../img/sprite.svg';
function UnderConstruction(props) {
  return (
    <div
      className='navigation__nav'
      style={{ opacity: '.95', width: '100%', backgroundColor: '#fff' }}
    >
      <div className='navigation__list'>
        <svg style={{ fill: '#222', width: '30rem', height: '30rem' }}>
          <use href={sprite + '#construction'}></use>
        </svg>
        <h3 style={{ fontSize: '5rem', margin: '5rem auto', fontWeight: 100 }}>
          Website is currently under construction. We look forward to showing
          you the finished product in the near future.
        </h3>
      </div>
    </div>
  );
}

export default UnderConstruction;
