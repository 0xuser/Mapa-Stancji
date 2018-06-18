import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions'

class Header extends Component {
  logout(){
    this.props.logoutUser();
  }

  render() {
    return(
      <header>
        <nav className="">
          <Link className="navbar-brand" to='/'>mapa-stancji.pl</Link>

          <div className="right">

            {this.props.isAuthenticated && <Link to='/me'>Profil</Link>}
            {this.props.isAuthenticated && <Link to='/classified/new'>Dodaj</Link>}
            {!this.props.isAuthenticated && <Link to='/login'>Zaloguj</Link>}
            {this.props.isAuthenticated && <a onClick={this.logout.bind(this)}>Wyloguj</a>}

          </div>
        </nav>
      </header>
    );
  }

};

function mapStateToProps(state){

  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, { logoutUser })(Header);
