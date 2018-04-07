import React from 'react';

const Header = () => {
    return(
        <header>
            <nav className="">
                <a className="navbar-brand">mapa-stancji</a>
                <div>
                    <a className="navbar-brand">Dodaj</a>
                    <a className="navbar-brand">Wyloguj</a>
                </div>
            </nav>
        </header>
        
    );
};

export default Header;