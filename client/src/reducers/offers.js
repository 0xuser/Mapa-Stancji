import { FETCH_OFFERS } from '../actions/index';

export default function(state = [], action){
    
  switch(action.type){
    case FETCH_OFFERS:              
      return action.payload.data
    default:
      return state
  }
}