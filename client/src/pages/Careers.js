import React from 'react';
import Banner from '../components/Banner';
import MainContainer from '../components/MainContainer';
import CareerSection from '../components/CareerSection';

function Careers({ location }) {
  return (
    <MainContainer>
      <Banner img='grow' />
      <CareerSection location={location} />
    </MainContainer>
  );
}

export default Careers;
