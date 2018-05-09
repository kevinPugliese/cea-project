import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthenticationReducers from './AuthenticationReducers';
import CategoriesReducers from './CategoriesReducers';

const rootReducer = combineReducers({
  items: [],
  form: formReducer,
  AuthenticationReducers,
  CategoriesReducers
});

export default rootReducer;
