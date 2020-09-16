import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../routes';

const Navigation = () => {
  return (
    <>
      <ul className="menu">
        <li>
          <NavLink exact to={routes.home} activeClassName="activelink">
            Home{' '}
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.movies} activeClassName="activelink">
            Movies{' '}
          </NavLink>
        </li>
      </ul>
      <hr />
    </>
  );
};
export default Navigation;
