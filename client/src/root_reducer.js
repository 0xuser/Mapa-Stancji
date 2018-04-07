import { combineReducers } from 'redux';
import OffersReducer from './reducers/offers'

const rootReducer = combineReducers({
  offers: OffersReducer
});

export default rootReducer;
