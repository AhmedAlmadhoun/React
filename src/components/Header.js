import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>

          <li>
            <Link to="/ScrollingCards">ScrollingCards</Link>
          </li>
          <li>
            <Link to="/SearchAndFilter"> SearchAndFilter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
