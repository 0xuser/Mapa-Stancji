import {
  FETCH_IMAGES_LIST_REQUEST, 
  FETCH_IMAGES_LIST_SUCCESS,
  FETCH_IMAGES_LIST_FAILURE
} from '../actions';

export default function({dispatch}) {
  return next => action => {
     
    if(action.type !== FETCH_IMAGES_LIST_REQUEST){
      return next(action);
    }
    
    if(action.type === FETCH_IMAGES_LIST_REQUEST){      
      action.payload
        .then(response => {
          dispatch(fetchImagesListSuccess(response.data.resources));
        })
        .catch(err => {
          dispatch(fetchImagesListFailure('Error'))
        });
    }
  }
}

function fetchImagesListSuccess(images){

  return {
    type: FETCH_IMAGES_LIST_SUCCESS,
    images
  }
}

function fetchImagesListFailure(error){
  return {
    type: FETCH_IMAGES_LIST_FAILURE,
    error
  }
}
