import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
        <li>
          <Link to="/sensor">
            Sensor Data Page
          </Link>
        </li>
        <li>
          <Link to="/notes">
            Personal Notes
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
