import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions';

export default function (state = {}, action){
  
  switch (action.type) {
    case REGISTER_REQUEST:
      return { 
        isFetching: true,
        error: ''
      };
    case REGISTER_SUCCESS:
      return {
        isFetching: false,
        error: ''
      };
    case REGISTER_FAILURE:
      return {
        isFetching: false,
        error: action.error
      };
    default:
      return state
  }
}