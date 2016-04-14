import {FETCH_POLLS, FETCH_POLLS_FAILURE, FETCH_POLLS_SUCCESS, RESET_POLLS
} from '../actions/polls';

const INITIAL_STATE = {
  pollsList: {polls: [], error: null, loading: false},

};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {

  case FETCH_POLLS:
    return { ...state, pollsList:{polls:[], error: null, loading: true}};

  case FETCH_POLLS_FAILURE:
    error = action.payload.data || {message: action.payload.message};
    return { ...state, pollsList:{polls:[], error: error, loading: false}};

  case FETCH_POLLS_SUCCESS:
    return { ...state, pollsList:{polls:action.payload.data, error: null, loading: false}};

  case RESET_POLLS:
    return { ...state, pollsList: {polls: [], error: null, loading: false}};
  default:
    return state;
  }
};
