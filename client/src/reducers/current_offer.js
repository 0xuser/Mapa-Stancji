import { 
  FETCH_OFFER_SUCCESS,
  FETCH_OFFER_FAILURE,
  FETCH_IMAGES_LIST_SUCCESS,
  FETCH_IMAGES_LIST_FAILURE
} from '../actions';

export default function(state = {
  offer: {},
  error: '',
  images: []
}, action){
  
  switch(action.type){
    case FETCH_OFFER_SUCCESS:
      return {
        offer: action.offer,
        images: state.images
      }
    case FETCH_OFFER_FAILURE:
      return {
        offer:{},
        error: action.error
      }
    case FETCH_IMAGES_LIST_SUCCESS:
      return {
        images: action.images,
        offer: state.offer
      }
    case FETCH_IMAGES_LIST_FAILURE:
      return {
        offer: state.offer,
        images: []
      }
    default:
      return state
  }
}