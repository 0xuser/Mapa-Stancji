import { 
  FETCH_OFFER_SUCCESS,
  FETCH_OFFER_FAILURE
} from '../actions';

export default function(state = {
  offer: {},
  error: ''
}, action){

  switch(action.type){
    case FETCH_OFFER_SUCCESS:
      return {
        offer: action.offer
      }
    case FETCH_OFFER_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}