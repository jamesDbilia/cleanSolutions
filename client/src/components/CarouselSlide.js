import React from 'react';

function CarouselSlide(slide) {
  return <div className={`slide slide-${slide}`} id={`#slide-${slide}`}></div>;
}

export default CarouselSlide;
