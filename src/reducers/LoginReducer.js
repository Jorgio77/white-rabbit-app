import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGGING_IN
} from '../actions/types';

  const INITIAL_STATE = {
    isLoggedIn: false,
    userId: null,
    isNewUser: false,
    isLoggingIn: false,
    error: ""
  };

  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOGGING_IN:
        return {...state, isLoggingIn: true}
      case LOGIN_SUCCESS:
        return { ...state, userId: action.payload.uid, isNewUser: action.payload.isNewUser, isLoggingIn: false, isLoggedIn: true };
      case LOGIN_FAILED:
        return { ...state, error: action.payload, isLoggedIn: false, isLoggingIn: false };
      default:
        return state;
    }
  }
