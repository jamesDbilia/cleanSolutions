import React from 'react';

const GradientButton = ({ type, text, size, loading, onClick, className }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {loading ? (
        <span className=''>
          Loading icon
          <span className=''>Loading...</span>
        </span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default GradientButton;
