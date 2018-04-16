import axios from 'axios';
export const FETCH_OFFERS = 'fetch_offers';
export const FILTER_OFFERS = 'filter_offers';


const ROOT_URL = 'http://77.55.192.219:8080/classfieldmap-backend/classified';

export function fetchOffers(filter){
    var request;

    if(filter == undefined){
        request = axios.get(`${ROOT_URL}/all`, { crossDomain: true });
    }else {
        const { type } = filter;
        if(type == 0){
            request = axios.get(`${ROOT_URL}/search?type=${type}&minCost=${filter.min_price}&maxCost=${filter.max_price}&persons=${filter.persons}` );
        }else if(type == 1){
            request = axios.get(`${ROOT_URL}/search?type=${type}&minCost=${filter.min_price}&maxCost=${filter.max_price}&minArea=${filter.min_area}&maxArea=${filter.max_area}`);
        }

    }
    
    return {
        type: FETCH_OFFERS,
        payload: request
    };
    
}
