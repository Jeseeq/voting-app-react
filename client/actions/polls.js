import axios from 'axios';

export const FETCH_POLLS = 'FETCH_POLL';
export const FETCH_POLLS_SUCCESS = 'FETCH_POLLS_SUCCESS';
export const FETCH_POLLS_FAILURE = 'FETCH_POLLS_FAILURE';
export const RESET_POLLS = 'RESET_POLLS';








const ROOT_URL = location.href.indexOf('http://192.168.1.12') > 0 ?
                                      'http://192.168.1.12:3000' : '/api';
export function fetchPolls() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/polls`,
    headers: []
  });
  return{
    type: FETCH_POLLS,
    payload: request
  };
}


export function fetchPollsSuccess(polls) {
  return{
    type: FETCH_POLLS_SUCCESS,
    payload: polls
  };
}

export function fetchPollsFailure(error) {
  return{
    type: FETCH_POLLS_FAILURE,
    payload: error
  };
}
export function resetPolls(){
  return{
    type: RESET_POLLS
  };
}
