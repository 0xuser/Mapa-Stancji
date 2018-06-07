import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import reducers from './root_reducer';
import AuthMiddleware from './middlewares/authentication';
import logoutMiddleware from './middlewares/logout';
import fetchOffersMiddleware from './middlewares/fetch_offers';
import currentOfferMiddleware from './middlewares/current_offer';
import registerMiddleware from './middlewares/register';
import fetchImagesListMiddleware from './middlewares/fetch_images';

const createStoreWithMiddleware = applyMiddleware(
  fetchImagesListMiddleware,
  registerMiddleware, 
  AuthMiddleware,
  logoutMiddleware,
  fetchOffersMiddleware,
  currentOfferMiddleware
  
  )(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </Provider>
  , document.querySelector('#container'));