import React from 'react';
import { useInView } from 'react-intersection-observer';
import sprite from '../img/sprite.svg';

function GraphicIcon({ position, icon, text }) {
  const { ref } = useInView({
    threshold: 0.9,
    triggerOnce: true,
    delay: 1,
  });

  return (
    <>
      <h3
        className={`graphic--${position} graphic-text graphic-text--${position}`}
      >
        {text}
      </h3>
      <div
        className={`graphic__circle-small graphic--${position} graphic__shadow`}
        style={
          {
            // opacity: inView ? 1 : 0,
            // scale: inView ? 1 : 0,
            // transition: 'all .7s .5s',
          }
        }
        ref={ref}
      >
        <svg className='graphic__icon '>
          <use href={`${sprite}${icon}`}></use>
        </svg>
        {/* <h4 className='graphic__icon-text'>{text}</h4> */}
      </div>
    </>
  );
}

export default GraphicIcon;
