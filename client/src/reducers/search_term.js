
import { SEARCH_ADDRESS } from '../actions/index';

export default function(state = {}, action){
  switch(action.type){
    case SEARCH_ADDRESS:
      return action.payload
    default: 
      return state
  }
}