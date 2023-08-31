import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { setBanner } from '../actions/InvViewActions';
import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm';
import GoogleMaps from '../components/GoogleMaps';
import ContactInfo from '../components/ContactInfo';
import useWindowDimensions from '../utils/ScreenWidth';

function Contact({ inView: { banner }, setBanner }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
    delay: 1,
  });
  const { width } = useWindowDimensions();

  const [rem, setRem] = useState(0);

  useEffect(() => {
    setRem(
      width >= 1800
        ? 0.62
        : width > 1200 && width < 1800
        ? 0.6
        : width <= 1200 && width > 900
        ? 0.54
        : width <= 900 && width > 650
        ? 0.54
        : 0.5
    );
    setBanner(inView);
    // eslint-disable-next-line
  }, [width, inView]);

  return (
    <section className='contact'>
      <div
        className='main-container__buffer'
        style={{ height: banner ? `${rem * 14.6}rem` : `${rem * 10}rem` }}
        ref={ref}
      ></div>
      <GoogleMaps />
      <div className='contact-info'>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
const mapStateToProps = (state) => ({
  inView: state.inView,
});

export default connect(mapStateToProps, { setBanner })(Contact);
