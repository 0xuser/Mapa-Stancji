import { combineReducers } from 'redux';
import OffersReducer from './reducers/offers';
import SearchReducer from './reducers/search_term';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  offers: OffersReducer,
  form: formReducer,
  searchedAddress: SearchReducer
  // form: FilterForm
});

export default rootReducer;
