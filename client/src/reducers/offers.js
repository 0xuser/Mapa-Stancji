import { FETCH_OFFERS_SUCCESS } from '../actions/index';

export default function(state = [], action){
    
  switch(action.type){
    case FETCH_OFFERS_SUCCESS:              
      return action.offers
    default:
      return state
  }
}