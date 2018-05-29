import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Link, withRouter} from 'react-router-dom';

import Header from './header';
import ClassifiedIndex from './classifieds/index';
import ClassifiedNew from './classifieds/new'
import SignIn from './sign_in';
import {loginUser, logoutUser} from '../actions'

class App extends Component {
  
  render(){
    const { dispatch, quote, isAuthenticated, errorMessage } = this.props;
    
    return(
      <div className="flex-container col">
         <Header />
          <Switch>
            <Route exact path="/" component={ClassifiedIndex} />
            <Route path="/classified/new" component={ClassifiedNew} />
            <Route path="/login" component={SignIn} />
          </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;
  
  return {
    isAuthenticated,
    errorMessage
  }
}

export default withRouter(connect(mapStateToProps, {loginUser, logoutUser})(App));
