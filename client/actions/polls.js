import axios from 'axios';

export const FETCH_POLLS = 'FETCH_POLLS';
export const FETCH_POLLS_SUCCESS = 'FETCH_POLLS_SUCCESS';
export const FETCH_POLLS_FAILURE = 'FETCH_POLLS_FAILURE';
export const RESET_POLLS = 'RESET_POLLS';

export const FETCH_POLL = 'FETCH_POLL';
export const FETCH_POLL_SUCCESS = 'FETCH_POLL_SUCCESS';
export const FETCH_POLL_FAILURE = 'FETCH_POLL_FAILURE';
export const RESET_POLL = 'RESET_POLL';







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

// Single poll actions

export function fetchPoll(id) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/poll/${id}`,
    headers: []
  });
  return{
    type: FETCH_POLL,
    payload: request
  };
}
export function fetchPollSuccess(poll) {
  return{
    type: FETCH_POLL_SUCCESS,
    payload: poll
  };
}
export function fetchPollFailure(error) {
  return{
    type: FETCH_POLL_FAILURE,
    payload: error
  };
}
export function resetPoll() {
  return{
    type: RESET_POLL
  };
}
