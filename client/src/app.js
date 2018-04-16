import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ClassifiedIndex from './components/classifieds/index';
import ClassifiedNew from './components/classifieds/new'
import reducers from './root_reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/classified/new" component={ClassifiedNew} />
        <Route path="/" component={ClassifiedIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#container'));