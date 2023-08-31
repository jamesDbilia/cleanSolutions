import React from 'react';
import drop from '../img/drop.jpg';

import rectangle from '../img/rectangle.png';
import { Carousel } from 'react-bootstrap';

function CarouselSlide1({ exitSlide1 }) {
  return (
    <Carousel.Item interval={10000000}>
      <div className='inner-carousel'>
        <div className='inner'>
          <div className='carousel-1__welcome-line'>
            <img
              src={rectangle}
              alt='rectangle'
              className={
                exitSlide1
                  ? `carousel-1__rectangle carousel-1__rectangle--left-end`
                  : `carousel-1__rectangle carousel-1__rectangle--left`
              }
            />

            <h3
              className={
                exitSlide1 ? `carousel-1__header-3-end` : `carousel-1__header-3`
              }
            >
              Welcome To
            </h3>
            <img
              src={rectangle}
              alt='rectangle'
              className={
                exitSlide1
                  ? `carousel-1__rectangle carousel-1__rectangle--right-end`
                  : `carousel-1__rectangle carousel-1__rectangle--right`
              }
            />

            <h1
              className={
                exitSlide1 ? `carousel-1__header-1-end` : `carousel-1__header-1`
              }
            >
              Clean Soils Services Ltd
            </h1>
            <h5
              className={
                exitSlide1 ? `carousel-1__tag-line-end` : `carousel-1__tag-line`
              }
            >
              Solids and liquid separataion specialists
            </h5>
            <button className='carousel-1__button'>Learn More</button>
          </div>
        </div>
        <img className='fit' src={drop} alt='First slide' />
      </div>
    </Carousel.Item>
  );
}

export default CarouselSlide1;
