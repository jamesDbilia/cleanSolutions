import React from 'react';
import { Link } from 'react-router-dom';
import { resetApplicationRedirect } from '../actions/EmailActions';
import { connect } from 'react-redux';

function ApplicationSuccess({ resetApplicationRedirect }) {
  return (
    <div className='application-success'>
      <h3 className='application-success__text'>
        Thank you for applying to Clean Soils. We have successfully received
        your application. If you are selected for the next steps we will contact
        you regarding the specifics.
      </h3>
      <button
        className='application__button'
        onClick={() => resetApplicationRedirect()}
      >
        <Link to='/listings' style={{ textDecoration: 'none', color: '#fff' }}>
          Return To Job Listings
        </Link>
      </button>
    </div>
  );
}

export default connect(null, { resetApplicationRedirect })(ApplicationSuccess);
