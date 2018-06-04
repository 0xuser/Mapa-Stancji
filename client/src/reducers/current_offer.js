import { FETCH_OFFER } from '../actions';

export default function(state = {}, action){

  switch(action.type){
    case FETCH_OFFER:
      return action.payload.data
    default:
      return state
  }
}