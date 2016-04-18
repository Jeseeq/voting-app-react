import {SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, RESET_USER,
  SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, LOGOUT_USER,
  LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from '../actions/users';

const INITIAL_STATE = {
  user: null,
  status: null,
  error: null,
  loading: false
};



export default function(state = INITIAL_STATE, action) {
  let error;

  switch (action.type) {
  case SIGNIN_USER:
    return {...state, user: null, status: 'signin', error: null, loading: true};
  case SIGNIN_USER_SUCCESS:
    return {
      ...state,
      user: action.payload.data.user,
      status: 'authenticated',
      error: null,
      loading: false
    };
  case SIGNIN_USER_FAILURE:
    error = action.payload.data || {message: action.payload.message};
    return {
      ...state,
      user: null,
      status: 'signin',
      error: error,
      loading: false
    };
  case SIGNUP_USER:
    return {
      ...state,
      user: null,
      status: 'signup',
      error: null,
      loading: true
    };
  case SIGNUP_USER_SUCCESS:
    return {
      ...state,
      user: action.payload.data.user,
      status: 'authenticated',
      error: null,
      loading: false
    };
  case SIGNUP_USER_FAILURE:
    error = action.payload.data || {message: action.payload.message};
    return {
      ...state,
      user: null,
      status: 'signup',
      error: error,
      loading: false
    };
  case RESET_USER:
    return {
      ...state,
      user: null,
      status: null,
      erorr: null,
      loading: null
    };
  case LOGOUT_USER:
    return {
      ...state,
      user: null,
      status: 'logout',
      error: null,
      loading: true
    };
  case LOGOUT_USER_SUCCESS:
    return {
      ...state,
      user: null,
      status: 'logedout',
      error: null,
      loading: false
    };
  case LOGOUT_USER_FAILURE:
    error = action.payload.data || {message: action.payload.message};
    return {
      ...state,
      user: null,
      status: 'logout',
      error: error,
      loading: false
    };
  default:
    return state;

  }

}
