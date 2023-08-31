import React, { useState } from 'react';
import NavSubItems from './NavSubItems';
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import sprite from '../img/sprite.svg';
import { connect } from 'react-redux';

function NavItem({
  nav,
  active,
  onClick,
  onMouseEnter,
  onMouseLeave,
  hover,
  index,
  inView: { banner },
}) {
  const [subHover, setHoverItem] = useState(false);

  const { scrollYProgress } = useViewportScroll();

  const paddingTop = useTransform(
    scrollYProgress,
    [0, 0.001, 1],
    ['5rem', '4rem', '4rem']
  );
  const paddingBottom = useTransform(
    scrollYProgress,
    [0, 0.001, 1],
    ['1.5rem', '1rem', '1rem']
  );

  // margin to submenu
  const marginTop = useTransform(
    scrollYProgress,
    [0, 0.001, 1],
    ['2.00rem', '1.9rem', '1.9rem']
  );

  return (
    <motion.li
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={
        active || hover
          ? 'nav-bar__item--active nav-bar__item'
          : 'nav-bar__item'
      }
      style={{
        paddingTop: banner ? paddingTop : '4rem',
        paddingBottom: banner ? paddingBottom : '1rem',
        transition: 'all .3s ease-in-out',
      }}
    >
      <NavLink
        smooth='true'
        to={`/${nav.route}`}
        className={
          active || hover
            ? 'nav-bar__link--active nav-bar__link'
            : 'nav-bar__link'
        }
      >
        {nav.mainItem}
      </NavLink>
      {nav.subMenu.length !== 0 && (
        <svg
          className={
            hover || active
              ? 'nav-bar__icon nav-bar__icon--active'
              : 'nav-bar__icon'
          }
        >
          <use href={sprite + '#icon-triangle-down'}></use>
        </svg>
      )}
      {hover && nav.subMenu.length !== 0 && (
        <motion.ul
          className={`nav-bar__subList nav-bar__subList--${index}`}
          style={{
            marginTop: banner ? marginTop : '1.5rem',
            transition: 'all .3s ease-in-out',
            // height: `${nav.subMenu.length * 4}rem`,
            gridTemplateRows: `repeat(${nav.subMenu.length}, 3rem)`,
          }}
        >
          {nav.subMenu.map((subItem, index) => (
            <NavSubItems
              subItem={subItem}
              index={index}
              onMouseEnter={() => setHoverItem(subItem)}
              subHover={subHover === subItem}
              onMouseLeave={() => setHoverItem('')}
              key={subItem}
            />
          ))}
        </motion.ul>
      )}
    </motion.li>
  );
}

const mapStateToProps = (state) => ({
  inView: state.inView,
});

export default connect(mapStateToProps)(NavItem);
