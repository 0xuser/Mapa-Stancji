import {
  FETCH_OFFERS_REQUEST, 
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILURE
} from '../actions';


export default function({dispatch}) {
  return next => action => {
     
    if(action.type !== FETCH_OFFERS_REQUEST){
      return next(action);
    }
    
    if(action.type === FETCH_OFFERS_REQUEST){      
      action.payload
        .then(response => {
          dispatch(fetch_success(response.data))
        })
        .catch(err => {
          dispatch(fetch_error("Eror :("));
        });
    }
  }
}

function fetch_success(offers){
  return {
    type: FETCH_OFFERS_SUCCESS,
    offers
  };
}
function fetch_error(error){
  return {
    type: FETCH_OFFERS_FAILURE,
    error
  };
}