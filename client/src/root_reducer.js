import { combineReducers } from 'redux';
import OffersReducer from './reducers/offers'
import { reducer as FilterForm } from 'redux-form';

const rootReducer = combineReducers({
  offers: OffersReducer,
  form: FilterForm
});

export default rootReducer;
