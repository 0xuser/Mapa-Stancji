import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Header from './header';
import ClassifiedIndex from './classifieds/index';
import ClassifiedNew from './classifieds/new'
import SignIn from './sign_in';

export default class App extends Component {
  render(){
    const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props;

    return(
      <div>
         <Header 
            isAuthenticated={isAuthenticated}
            errorMessage={errorMessage}
            dispatch={dispatch}
          />
          <Switch>
            <Route path="/classified/new" component={ClassifiedNew} />
            <Route path="/login" component={SignIn} />
            <Route path="/" component={ClassifiedIndex} />
          </Switch>
      </div>
    );
  }
}


