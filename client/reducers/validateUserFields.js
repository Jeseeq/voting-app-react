import {VALIDATE_USER_FIELDS, VALIDATE_USER_FIELDS_FAILURE,
   VALIDATE_USER_FIELDS_SUCCESS, REST_VALIDATE_USER_FIELDS
 } from '../actions/validateUserFields';

const INITIAL_STATE = {error: null, loading: false};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
  case VALIDATE_USER_FIELDS:
    return{
      ...state, error: null, loading: true
    };
    // same
  case REST_VALIDATE_USER_FIELDS:
  case VALIDATE_USER_FIELDS_SUCCESS:
    return{
      ...state, erorr: null, loading: false
    };
  case VALIDATE_USER_FIELDS_FAILURE:
    error = action.payload.data ? action.payload.data : action.payload.message;
    return{
      ...state, error: error, loading: false
    };
  default:
    return state;
  }
};
