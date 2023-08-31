import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNavOpen } from '../actions/InvViewActions';

function NavCollapse({ inView: { banner, navOpen }, setNavOpen }) {
  return (
    <div className='navigation'>
      <input
        type='checkbox'
        className='navigation__checkbox'
        id='navi-toggle'
      />
      <label
        htmlFor='navi-toggle'
        className='navigation__button'
        style={{
          transition: 'all .3s ease-in-out',
          width: banner ? '4.55rem' : '3.8rem',
        }}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span
          className='navigation__icon navigation__icon--top'
          style={{
            transform: navOpen ? 'rotate(-500deg)' : 'rotate(0deg)',
            alignSelf: navOpen ? 'center' : 'start',
          }}
        ></span>
        <span
          className='navigation__icon navigation__icon--middle'
          style={{ backgroundColor: navOpen ? 'transparent' : '#333' }}
        ></span>
        <span
          className='navigation__icon navigation__icon--bottom'
          style={{
            transform: navOpen ? 'rotate(500deg)' : 'rotate(0deg)',
            alignSelf: navOpen ? 'center' : 'end',
          }}
        ></span>
      </label>
      <div
        className='navigation__background'
        style={{
          transform: navOpen ? 'scale(100)' : 'scale(0)',
          width: banner ? '4.3rem' : '3.2rem',
        }}
      >
        &nbsp;
      </div>
      <nav
        className='navigation__nav'
        style={{
          opacity: navOpen ? '1' : '0',
          width: navOpen ? '100%' : '0%',
        }}
      >
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <NavLink
              smooth='true'
              onClick={() => setNavOpen(false)}
              to='/'
              className='navigation__link '
            >
              <input
                type='checkbox'
                className='navigation__checkbox'
                id='navi-toggle'
              />
              Home
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              smooth='true'
              onClick={() => setNavOpen(false)}
              to='/industry'
              className='navigation__link'
            >
              Industries We Serve
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              smooth='true'
              onClick={() => setNavOpen(false)}
              to='/careers'
              className='navigation__link'
            >
              Careers
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              smooth='true'
              onClick={() => setNavOpen(false)}
              to='/accountability'
              className='navigation__link'
            >
              Accountability
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              smooth='true'
              onClick={() => setNavOpen(false)}
              to='/locations'
              className='navigation__link'
            >
              Locations
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              smooth='true'
              onClick={() => setNavOpen(false)}
              to='/contact'
              className='navigation__link'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  inView: state.inView,
});

export default connect(mapStateToProps, { setNavOpen })(NavCollapse);
