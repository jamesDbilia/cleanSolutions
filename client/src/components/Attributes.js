import React from 'react';
import AttributeSection from './AttributeSection';
function Attributes(props) {
  return (
    <div className='attributes'>
      <h1 className='attributes__title'>
        Innovative Solutions with Proven Results
      </h1>
      <p className='attributes__title-text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae.
      </p>
      <AttributeSection
        icon='municipal'
        title='Municipal Services'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          labore facere dolores architecto harum iste laboriosam eos quae illo
          cumque.'
        order='odd'
      />
      <AttributeSection
        icon='construction'
        title='Construction'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          labore facere dolores architecto harum iste laboriosam eos quae illo
          cumque.'
        order='even'
      />{' '}
      <AttributeSection
        icon='utilities'
        title='Utilities'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        labore facere dolores architecto harum iste laboriosam eos quae illo
        cumque.'
        order='odd'
      />
    </div>
  );
}

export default Attributes;
