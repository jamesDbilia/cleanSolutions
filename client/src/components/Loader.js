import React from 'react';
import spinner from '../img/spinner.svg';

function Loader(props) {
  return (
    <div className='loader__container'>
      <div className='loader__spinner'>
        <img src={spinner} alt='' />
      </div>
    </div>
  );
}

export default Loader;
