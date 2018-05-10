import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthenticationReducers from './AuthenticationReducers';
import CategoriesReducers from './CategoriesReducers';
import ProductsReducers from './ProductsReducers';

const rootReducer = combineReducers({
  items: [],
  form: formReducer,
  AuthenticationReducers,
  CategoriesReducers,
  ProductsReducers
});

export default rootReducer;
