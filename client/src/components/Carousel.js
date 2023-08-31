import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import drop from '../img/drop.jpg';
import comstock from '../img/comstock.png';
import vickers from '../img/vickers.png';
import rectangle from '../img/rectangle.png';
import { Link } from 'react-scroll';
import useWindowDimensions from '../utils/ScreenWidth';
import Gradient from '../common/Gradient';

function CarouselSection() {
  const [windowOffset, setWindowOffset] = useState(1800);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const heightOffset = (width) => {
      setWindowOffset(
        width >= 1800
          ? -75
          : width > 1200 && width < 1800
          ? -65
          : width <= 1200 && width > 900
          ? -55.5
          : width <= 900 && width > 650
          ? -45
          : -36
      );
    };
    return heightOffset(width);
  }, [width]);
  return (
    <>
      <Carousel>
        {/* slide 1 */}
        <Carousel.Item interval={3000}>
          <div className='carousel__container carousel__container--1'>
            <div className='carousel__inner-container'>
              <div className='carousel__welcome-line'>
                <img
                  src={rectangle}
                  alt='rectangle'
                  loading='lazy'
                  className='carousel__rectangle carousel__rectangle--left'
                />

                <h3 className={`carousel__header-3`}>Welcome To</h3>
                <img
                  src={rectangle}
                  alt='rectangle'
                  className={`carousel__rectangle carousel__rectangle--right`}
                />
              </div>
              <h1 className={`carousel__header-1`}>Clean Soils Services Ltd</h1>
              <h5 className='carousel__tag-line'>
                Dump, Clean, Solid and Liquid Separation Specialists
              </h5>
              <div className='carousel__button-container'>
                <Link
                  className='carousel__button'
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={windowOffset}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <img className='fit' src={drop} loading='lazy' alt='First slide' />
        </Carousel.Item>
        {/* slide 2 */}
        <Carousel.Item interval={3000000}>
          <div className='carousel__container carousel__container--2'>
            <Gradient />
            <div className=' carousel__inner-container'>
              <h3 className='carousel__header-3 carousel__header-3--2'>
                Welcome To
              </h3>
              <h1 className='carousel__header-1'>Clean Soils Services Ltd</h1>
              <h5 className='carousel__tag-line'>
                Dump Clean, Solid and Liquid Separation Specialists
              </h5>
              <div className='carousel__button-container'>
                <Link
                  className='carousel__button'
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={windowOffset}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <img className='fit' src={vickers} loading='lazy' alt='Third slide' />
        </Carousel.Item>
        {/* slide 3 */}
        <Carousel.Item interval={3000}>
          <div className='carousel__container carousel__container--3'>
            <Gradient />
            <div className=' carousel__inner-container'>
              <h3 className='carousel__header-3 carousel__header-3--3'>
                Welcome To
              </h3>

              <h1 className='carousel__header-1'>Clean Soils Services Ltd</h1>
              <h5 className='carousel__tag-line'>
                Solids and liquid separataion specialists
              </h5>
              <div className='carousel__button-container'>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className='carousel__button'
                  offset={windowOffset}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <img
            className='fit'
            src={comstock}
            loading='lazy'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselSection;
