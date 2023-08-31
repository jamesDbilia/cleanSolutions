import React from 'react';
import ContactUsBar from '../components/ContactUsBar';
import InfoGraphic from '../components/InfoGraphic';
import Attributes from '../components/Attributes';
import Statement from '../components/Statement';
import CarouselSection from '../components/Carousel';
import MainContainer from '../components/MainContainer';
import UnderConstruction from './UnderConstruction';

function About(props) {
  // notes
  // internet explorer take a look
  // dump, clean
  // locations images for location page
  //
  return (
    <MainContainer>
      {/* <UnderConstruction /> */}
      <CarouselSection />
      <ContactUsBar id='contact' />
      <InfoGraphic />
      <Statement />
      <Attributes />
      <ContactUsBar />
    </MainContainer>
  );
}

export default About;
