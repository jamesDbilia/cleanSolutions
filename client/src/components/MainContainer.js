import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { setBanner } from '../actions/InvViewActions';
import { connect } from 'react-redux';

function MainContainer({ setBanner, children }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
    delay: 1,
  });
  useEffect(() => {
    setBanner(inView);
    // eslint-disable-next-line
  }, [inView]);

  return (
    <div className='main-container'>
      <div className='main-container__buffer' ref={ref}></div>
      {children}
    </div>
  );
}

export default connect(null, { setBanner })(MainContainer);
