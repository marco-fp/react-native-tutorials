'use strict';

import { combineReducers } from 'redux';
import contadorReducer from './contadorReducer';

const appReducers =  combineReducers({
  contador: contadorReducer,
});

export default appReducers;
