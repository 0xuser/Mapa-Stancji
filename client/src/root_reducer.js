import { combineReducers } from 'redux';
import OffersReducer from './reducers/offers'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  offers: OffersReducer,
  form: formReducer
  // form: FilterForm
});

export default rootReducer;
