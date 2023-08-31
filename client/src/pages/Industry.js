import React from 'react';
import Banner from '../components/Banner';
import ContactUsBar from '../components/ContactUsBar';
import Statement from '../components/Statement';
import MainContainer from '../components/MainContainer';

function Industry(props) {
  return (
    <MainContainer>
      <Banner img='shaker' />
      <ContactUsBar />
      <Statement />
    </MainContainer>
  );
}

export default Industry;
