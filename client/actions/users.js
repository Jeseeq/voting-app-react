import axios from 'axios';

export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';
export const RESET_USER = 'RESET_USER';

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';
export const GET_CURRENT_USER = 'GET_CURRENT_USER'



const ROOT_URL = location.href.indexOf('http://192.168.1.12') > 0 ?
                                      'http://192.168.1.12:3000' : '/api';

export function signUpUser(formValues) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/signup`,
    data: formValues
  });
  return {
    type: SIGNUP_USER,
    payload: request
  };
}
export function signUpUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  };
}
export function signUpUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  };
}
export function signInUser(formValues) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/signin`,
    data: formValues
  });
  return {
    type: SIGNIN_USER,
    payload: request
  };
}
export function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user
  };
}
export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}

export function logoutUser() {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/logout`,
  });
  return {
    type: LOGOUT_USER,
    payload: request
  };
};
export function logoutUserFailure(error) {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: error
  };
};
export function logoutUserSuccess(message) {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: message
  };
};

export function resetUser() {
  return {
    type: RESET_USER
  };
}
export function getCurrentUser() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/users/get/user/from/cookie`
  });
  return{
    type: GET_CURRENT_USER,
    payload: request
  };
}
