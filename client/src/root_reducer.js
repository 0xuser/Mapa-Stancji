import { combineReducers } from 'redux';
import OffersReducer from './reducers/offers';
import SearchReducer from './reducers/search_term';
import AuthReducer from './reducers/auth'
import signup from './reducers/registration'
import current_offer from './reducers/current_offer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  offers: OffersReducer,
  form: formReducer,
  searchedAddress: SearchReducer,
  auth: AuthReducer,
  signup,
  current_offer
});

export default rootReducer;
