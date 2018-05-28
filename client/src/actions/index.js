import axios from 'axios';
export const FETCH_OFFERS = 'fetch_offers';
export const FILTER_OFFERS = 'filter_offers';
export const CREATE_OFFER = 'create_offer';
export const SEARCH_ADDRESS = 'search_address';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// const ROOT_URL = 'http://77.55.192.219:8080/classfieldmap-backend';
const ROOT_URL = 'http://127.0.0.1:8081/classfieldmap-backend';

export function fetchOffers(filter){
  var request;
  var url = '';

  if(filter == undefined){
      url = `${ROOT_URL}/classified/all`;
  }else {
    const { type, room, flat, persons, min_price, max_price, min_area, max_area } = filter;
    url = `${ROOT_URL}/classified/search?`;

    if(room != flat){
        if(room){
            url += 'type=0';
        }else{
            url += 'type=1';
        }
    }
    if( persons.length > 0 ){
      url += `&persons=${persons}`
    }
    if( min_price.length > 0 ){
      url += `&minCost=${min_price}`
    }
    if( max_price.length > 0 ){
      url += `&maxCost=${max_price}`
    }
    if( min_area.length > 0 ){
      url += `&minArea=${min_area}`
    }
    if( max_area.length > 0 ){
      url += `&maxArea=${max_area}`
    }
  }
  request = axios.get(url);

  return {
    type: FETCH_OFFERS,
    payload: request
  };
    
}

export function createOffer(values, callback){
  var url = `${ROOT_URL}/classified/addclassified`;
    
  const request = axios.post(url, values)
  .then(() => callback());
  
  return {
    type: CREATE_OFFER,
    payload: request
  }
}

export function searchAddress(values){ 
  return {
    type: SEARCH_ADDRESS,
    payload: values
  }
}

export function loginUser(creds, callback){
  const url = `${ROOT_URL}/public/users/login`;
  var request = axios.post(url, creds);
 
  return {
    type: LOGIN_REQUEST,
    payload: request,
    callback: callback
  }
}

export function logoutUser(){
  return {
    type: LOGOUT_REQUEST
  }
}