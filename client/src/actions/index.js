import axios from 'axios';
export const FETCH_OFFERS = 'fetch_offers';
export const FILTER_OFFERS = 'filter_offers';


const ROOT_URL = 'http://77.55.192.219:8080/classfieldmap-backend/classified';

export function fetchOffers(filter){
    const request = axios.get(`${ROOT_URL}/all`, { crossDomain: true });

    return {
        type: FETCH_OFFERS,
        payload: request
    };
    
}
