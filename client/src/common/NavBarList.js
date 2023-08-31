import React, { useState } from 'react';
import navArray from '../common/NavBarArray';
import NavItem from './NavItem';

function NavBarList(props) {
  const [active, setActive] = useState('');
  const [hover, setHoverItem] = useState(false);
  return (
    <ul className='nav-bar__list'>
      {navArray.map((nav, index) => (
        <NavItem
          nav={nav}
          index={index}
          key={nav.mainItem}
          active={active === nav.mainItem}
          onClick={() => setActive(nav.mainItem)}
          onMouseEnter={() => setHoverItem(nav.mainItem)}
          hover={hover === nav.mainItem}
          onMouseLeave={() => setHoverItem('')}
        />
      ))}
    </ul>
  );
}

export default NavBarList;
