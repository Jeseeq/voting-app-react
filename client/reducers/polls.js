import {
  FETCH_POLLS,
  FETCH_POLLS_FAILURE,
  FETCH_POLLS_SUCCESS,
  RESET_POLLS,
  FETCH_POLL,
  FETCH_POLL_SUCCESS,
  FETCH_POLL_FAILURE,
  RESET_POLL,
} from '../actions/polls';

const INITIAL_STATE = {
  pollsList: { polls: [], error: null, loading: false },
  activePoll: { poll: null, error: null, loading: false },

};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {

  case FETCH_POLLS:
    return {
      ...state,
      pollsList:{ polls:[], error: null, loading: true }
    };

  case FETCH_POLLS_FAILURE:
    error = action.payload.data || { message: action.payload.message };
    return {
      ...state,
      pollsList:{ polls:[], error: error, loading: false }
    };

  case FETCH_POLLS_SUCCESS:
    return {
      ...state,
      pollsList:{ polls:action.payload.data, error: null, loading: false }
    };

  case RESET_POLLS:
    return {
      ...state,
      pollsList: { polls: [], error: null, loading: false }
    };


  case FETCH_POLL:
    return {
      ...state,
      activePoll: { ...state.activePost, loading: true }
    };
  case FETCH_POLL_SUCCESS:
    return {
      ...state,
      activePoll: { poll: action.payload.data, error: null, loading: false }
    };
  case FETCH_POLL_FAILURE:
    error = action.payload.data || {message: action.payload.message};
    return {
      ...state,
      activePoll: { poll: null, error: error, loading: false }
    };
  case RESET_POLL:
    return {
      ...state,
      activePoll: { poll: null, error: null, loading: false }
    };
  default:
    return state;
  }
};
