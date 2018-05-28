import { 
  LOGOUT_REQUEST, 
  LOGOUT_SUCCESS, 
  LOGOUT_FAILURE
} from '../actions/index';

export default function({ dispatch }){
  return next => action => {
    if(action.type !== LOGOUT_REQUEST){
      return next(action);
    }

    if(action.type === LOGOUT_REQUEST){
      localStorage.removeItem('id_token')
      dispatch(receiveLogout());
    }
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}