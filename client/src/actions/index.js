import axios from 'axios';
export const FETCH_OFFERS = 'fetch_offers';
export const FILTER_OFFERS = 'filter_offers';
export const CREATE_OFFER = 'create_offer';
export const AUTH = 'authenticate';

const ROOT_URL = 'http://77.55.192.219:8080/classfieldmap-backend/classified';

export function fetchOffers(filter){
  var request;
  var url = '';

  if(filter == undefined){
      url = `${ROOT_URL}/all`;
  }else {
    const { type, room, flat, persons, min_price, max_price, min_area, max_area } = filter;
    url = `${ROOT_URL}/search?`;

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
  request = axios.get(url, { crossDomain: true });
  return {
    type: FETCH_OFFERS,
    payload: request
  };
    
}

export function createOffer(values, callback){
  var url = `${ROOT_URL}/addclassified`;
  
  // const request = axios.post(url, values)
  // .then(() => callback());
  
  return {
    type: CREATE_OFFER,
    payload: request
  }
}

export function authenticate(values){
  console.log(values);
  
  return {
    type: AUTH
  }
}