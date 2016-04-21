import axios from 'axios';

export const VALIDATE_USER_FIELDS = 'VALIDATE_USER_FIELDS';
export const VALIDATE_USER_FIELDS_SUCCESS = 'VALIDATE_USER_FIELDS_SUCCESS';
export const VALIDATE_USER_FIELDS_FAILURE = 'VALIDATE_USER_FIELDS_FAILURE';
export const REST_VALIDATE_USER_FIELDS = 'REST_VALIDATE_USER_FIELDS';

const ROOT_URL = location.href.indexOf('http://192.168.1.12') > 0 ?
                                      'http://192.168.1.12:3000' : '/api';


export function validateUserFields(values) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/validate/fields`,
    data: values
  });
  return{
    type: VALIDATE_USER_FIELDS,
    payload: request
  };
};


export function validataUserFieldsFailure(error) {
  return{
    type: VALIDATE_USER_FIELDS_SUCCESS,
    payload: error
  };
};

export function validataUserFieldsSuccess() {
  return{
    type: VALIDATE_USER_FIELDS_SUCCESS,
  };
};


export function restValidateUserFields() {
  return{
    type: REST_VALIDATE_USER_FIELDS
  };
};
