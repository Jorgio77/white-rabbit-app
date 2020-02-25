import { combineReducers } from 'redux';
import { LOG_OUT_SUCCESS } from '../actions/types';

import LoginReducer from './LoginReducer';

const appReducer = combineReducers({
  login: LoginReducer
});

export default rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT_SUCCESS') {
    state = undefined
  }
  return appReducer(state, action)
}
