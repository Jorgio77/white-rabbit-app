import { combineReducers } from 'redux';
import { LOG_OUT_SUCCESS } from '../actions/types';

import LoginReducer from './LoginReducer';
import SettingsReducer from './SettingsReducer';

const appReducer = combineReducers({
  login: LoginReducer,
  settings: SettingsReducer
});

//done to reset all state with one hit
export default rootReducer = (state, action) => {
  if (action.type === LOG_OUT_SUCCESS) {
    state = undefined
  }
  return appReducer(state, action)
}
