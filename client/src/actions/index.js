import axios from 'axios';
export const FETCH_OFFERS_REQUEST = 'FETCH_OFFERS_REQUEST';
export const FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS';
export const FETCH_OFFERS_FAILURE = 'FETCH_OFFERS_FAILURE';

export const FETCH_OFFER_REQUEST = 'FETCH_OFFER_REQUEST';
export const FETCH_OFFER_SUCCESS = 'FETCH_OFFER_SUCCESS';
export const FETCH_OFFER_FAILURE = 'FETCH_OFFER_FAILURE';

export const FILTER_OFFERS = 'filter_offers';
export const CREATE_OFFER = 'create_offer';
export const SEARCH_ADDRESS = 'search_address';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


const ROOT_URL = 'http://77.55.192.219:8080/classfieldmap-backend';
// const ROOT_URL = 'http://127.0.0.1:8081/classfieldmap-backend';

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
    type: FETCH_OFFERS_REQUEST,
    payload: request
  };

}

export function createOffer(values, callback){
  var url = `${ROOT_URL}/classified/addclassified`;
  const data = {
    userId: localStorage.getItem('id_token'),
    ...values
  }
  
  const request = axios.post(url, data,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('id_token')}`
    }
  })
  .then(() => callback());

  return {
    type: CREATE_OFFER,
    payload: request
  }
}

export function updateOffer(values, id, callback){
  var url = `${ROOT_URL}/classified/${id}`;
  const data = {
    userId: localStorage.getItem('id_token'),
    ...values
  }

  console.log(data);
  

  const request = axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('id_token')}`
    }
  }).then(() => callback());

  return {
    type: 'UPDATE_OFFER',
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

export function loginWithFb(data, callback){
  const url = `${ROOT_URL}/public/users/fbregister`;
  const request = axios.post(url,data);

  return {
    type: LOGIN_REQUEST,
    payload: request,
    callback: callback
  }
}

export function registerFbUser(user) {
  const url = `${ROOT_URL}/public/users/fbregister`;
  const request = axios.post(url, user)
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.rog(error);
  });
  // return {
  //   type: REGISTER_REQUEST,
  //   payload: request,
  //   callback
  // }
}


export function logoutUser(){
  return {
    type: LOGOUT_REQUEST
  }
}

export function registerUser(user, callback) {
  const url = `${ROOT_URL}/public/users/register`;
  const request = axios.post(url, user);

  return {
    type: REGISTER_REQUEST,
    payload: request,
    callback
  }
}



export function fetch_offer(id){
  const url = `${ROOT_URL}/classified`;
  const request = axios.get(url, {
    params: {
      id
    }
  });

  return {
    type: FETCH_OFFER_REQUEST,
    payload: request
  }
}
