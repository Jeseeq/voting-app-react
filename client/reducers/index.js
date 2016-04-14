import {combineReducers} from 'redux';

import PollsReducer from './polls';

const rootReducer = combineReducers({
  polls: PollsReducer
});

export default rootReducer;
