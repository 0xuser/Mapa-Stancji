import { 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS, 
  REGISTER_FAILURE 
} from '../actions';

export default function({dispatch}){
  return next => action => {
    if(action.type !== REGISTER_REQUEST){
      return next(action);
    }

    if(action.type === REGISTER_REQUEST){
      action.payload
      .then(response => {
        if(response.data && response.status == 200){
          localStorage.setItem('id_token', response.data);
          dispatch(success('user'));
          action.callback();
        }else{
          dispatch(failure('Coś poszło nie tak.'))
        }
      })
      .catch(err => {        
        dispatch(failure(err.message))
      });      
    }
  }
}

function request(user) {
  return { 
    type: REGISTER_REQUEST, 
    user
  } 
}
function success(user) {
  return { 
    type: REGISTER_SUCCESS,
    user
  } 
}
function failure(error) { 
  return {
    type: REGISTER_FAILURE,
    error
  } 
}