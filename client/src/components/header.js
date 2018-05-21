import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    
  return(
    <header>
      <nav className="">
        <Link className="navbar-brand" to='/'>mapa-stancji.pl</Link>
        <div className="right">
          <Link to='/classified/new'>Dodaj</Link>
          <Link to='/login'>Zaloguj</Link>
          <Link to='/'>Wyloguj</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;