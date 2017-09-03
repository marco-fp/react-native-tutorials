'use strict';

import { combineReducers } from 'redux';
import autenticationReducer from './autenticationReducer';

const appReducers =  combineReducers({
  autentication: autenticationReducer,
});

export default appReducers;
