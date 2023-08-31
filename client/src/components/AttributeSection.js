import React from 'react';
import { useInView } from 'react-intersection-observer';
import sprite from '../img/sprite.svg';
import { Link } from 'react-router-dom';

function AttributeSection({ order, title, icon, text }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
    // delay: 2,
  });
  return (
    <div
      className={`attributes__section--${order} attributes__section`}
      ref={ref}
    >
      <h2
        className={
          inView ? 'attributes__header--animation' : 'attributes__header'
        }
      >
        {title}
      </h2>
      <p
        className={inView ? 'attributes__text--animation' : 'attributes__text'}
      >
        {text}
      </p>
      <Link
        className={inView ? 'attributes__link--animation' : 'attributes__link'}
        to={`/${icon}`}
      >
        Learn More..
      </Link>
      <svg
        className={inView ? 'attributes__icon--animation' : 'attributes__icon'}
      >
        <use href={`${sprite}#icon-${icon}`}></use>
      </svg>
    </div>
  );
}

export default AttributeSection;
