import React from 'react';

const Header = () => {
    return(
        <header>
            <nav className="">
                <a className="navbar-brand" href="/">mapa-stancji.pl</a>
                <div className="right">
                    <a href="/classified/new">Dodaj</a>
                    <a href="">Wyloguj</a>
                </div>
            </nav>
        </header>
        
    );
};

export default Header;