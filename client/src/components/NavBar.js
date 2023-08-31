import React from 'react';
import NavBarList from '../common/NavBarList';
import logo from '../img/logo.svg';
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { connect } from 'react-redux';
import NavCollapse from './NavCollapse';
import useWindowDimensions from '../utils/ScreenWidth';

function NavBar({ inView: { banner, navOpen } }) {
  const { scrollYProgress } = useViewportScroll();

  const { width } = useWindowDimensions();

  const setScale = useTransform(scrollYProgress, [0, 0.001, 1], [1, 0.9, 0.9]);

  const setMargin = useTransform(
    scrollYProgress,
    [0, 0.001, 1],
    ['2rem 0', '1rem 0', '1rem 0']
  );

  return (
    <div className='navbar'>
      <motion.nav
        className='nav-bar'
        style={{
          top: '0',
          left: '0',
          width: '100%',
          gridTemplateColumns:
            width > 1100 && !navOpen
              ? ' minmax(8%, 1fr) minmax(25rem, 30rem) minmax(7rem, 10rem) 65rem minmax(8%, 1fr)'
              : '8% 25rem minmax(4%, 1fr)',
        }}
      >
        <motion.img
          className='nav-bar__logo'
          style={{
            scale: banner ? setScale : '.6',
            transformOrigin: 'left',
            transition: 'all .3s ease-in-out',
            zIndex: '150',
            margin: banner && width < 1100 ? setMargin : '1rem 0',
          }}
          src={logo}
          alt='logo'
        />
        {width > 1100 && navOpen === false ? <NavBarList /> : <NavCollapse />}
      </motion.nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  inView: state.inView,
});

export default connect(mapStateToProps)(NavBar);
