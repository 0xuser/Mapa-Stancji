import {
  FETCH_OFFER_REQUEST, 
  FETCH_OFFER_SUCCESS,
  FETCH_OFFER_FAILURE
} from '../actions';


export default function({dispatch}) {
  return next => action => {
     
    if(action.type !== FETCH_OFFER_REQUEST){
      return next(action);
    }
    
    if(action.type === FETCH_OFFER_REQUEST){      
      action.payload
        .then(response => {          
          dispatch(fetch_success(response.data))
        })
        .catch(error => {
          if(error.response){
            dispatch(fetch_error("Nie znaleziono oferty"));
          }
        });
    }
  }
}

function fetch_success(offer){
  return {
    type: FETCH_OFFER_SUCCESS,
    offer
  };
}
function fetch_error(error){
  return {
    type: FETCH_OFFER_FAILURE,
    error
  };
}