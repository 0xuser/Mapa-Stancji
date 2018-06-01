import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE 
} from '../actions/index';

export default function({dispatch}) {
  return next => action => {
     
    if(action.type !== LOGIN_REQUEST){
      return next(action);
    }
    
    if(action.type === LOGIN_REQUEST){      
      action.payload
      .then(response => {        
        if(response.data && response.status == 200){  
          localStorage.setItem('id_token', response.data);
          dispatch(receiveLogin(response.data));
          action.callback(); 
        }else{
          dispatch(loginError('Login error'));
        }
      })
      .catch(error => {        
        dispatch(loginError(error.message));
      })
    }
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    id_token: user
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
  }
}