import React from 'react';
import line from '../img/line.svg';
import graphic1 from '../img/brightPlant.jpg';
import graphic2 from '../img/forest.jpg';
import graphic3 from '../img/drop2.jpg';
import graphic4 from '../img/forest2.jpg';
import GraphicIcon from '../common/GraphicIcon';
import sprite from '../img/sprite.svg';

function InfoGraphic(props) {
  return (
    <div className='graphic'>
      <h3 className='heading__3 graphic__header'>
        We are the leading Hydrovac receiving facility{' '}
      </h3>
      <p className='graphic__text'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eius
        hic sit maxime quas fugit dicta, quo expedita vitae nesciunt a assumenda
        tempora fugiat dolore dignissimos eos esse perferendis totam?
      </p>
      <div className='graphic__section'>
        <img src={line} alt='' className='graphic__line' />
        <GraphicIcon icon='#drop' text={'Water Preservation'} position='left' />
        <GraphicIcon
          icon='#icon-tree'
          position='center'
          text={'Liquid & Soil Separation'}
        />
        <GraphicIcon
          icon='#icon-lab'
          position='right'
          text={'Disposal Reduction'}
        />

        <svg className='graphic__cloud'>
          <use href={sprite + '#icon-weather-cloudy'}></use>
        </svg>

        <svg className='graphic__cloud--2'>
          <use href={sprite + '#icon-weather-cloudy'}></use>
        </svg>

        <svg className='graphic__sun'>
          <use href={sprite + '#icon-weather-sunny'}></use>
        </svg>

        <div className='graphic__circle-large'>
          <div className='graphic__image-carousel'>
            <img
              src={graphic1}
              alt=''
              className='graphic__image graphic__image--1'
            />
            <img
              src={graphic2}
              alt=''
              className='graphic__image graphic__image--2'
            />
            <img
              src={graphic3}
              alt=''
              className='graphic__image graphic__image--3'
            />
            <img
              src={graphic4}
              alt=''
              className='graphic__image graphic__image--4'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoGraphic;
