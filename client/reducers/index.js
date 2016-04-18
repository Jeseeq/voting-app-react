import {combineReducers} from 'redux';

import PollsReducer from './polls';
import UserReducer from './user';
const rootReducer = combineReducers({
  user: UserReducer,
  polls: PollsReducer
});

export default rootReducer;
