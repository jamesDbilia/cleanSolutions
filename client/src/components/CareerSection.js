import React from 'react';
import { Link } from 'react-router-dom';

function CareerSection(props) {
  return (
    <div className='career__section'>
      <h2 className='career__header'>Build Your Career </h2>
      <p className='career__paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        reiciendis ullam quasi veritatis ab eligendi laboriosam consectetur
        numquam, velit et? Voluptatum, ducimus optio. Corporis vel culpa atque.
        Eveniet repudiandae deleniti asperiores minima, dolor eum, illo
        architecto consectetur quidem sed veniam officiis odit reiciendis
        deserunt nihil, consequuntur perferendis recusandae saepe sunt?
      </p>
      <Link to='/listings' className='career__button'>
        Apply Today
      </Link>
    </div>
  );
}

export default CareerSection;
