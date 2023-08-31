import React from 'react';
import { Link } from 'react-router-dom';

function NavSubItems({ subItem, index, subHover, onMouseEnter, onMouseLeave }) {
  return (
    <li
      className={
        subHover
          ? 'nav-bar__subList--item--active nav-bar__subList--item'
          : 'nav-bar__subList--item'
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ gridRow: `${index + 1}/${index + 2}` }}
    >
      <Link
        smooth='true'
        className={
          subHover
            ? 'nav-bar__subList--link--active nav-bar__subList--link'
            : 'nav-bar__subList--link'
        }
        style={{ gridRow: `${index + 1}/${index + 2}` }}
      >
        {subItem}
      </Link>
    </li>
  );
}

export default NavSubItems;
