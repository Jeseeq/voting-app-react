import {combineReducers} from 'redux';

import PollsReducer from './polls';
import UserReducer from './user';

import {reducer as formReducer} from 'redux-form';
const rootReducer = combineReducers({
  user: UserReducer,
  polls: PollsReducer,
  form: formReducer

});

export default rootReducer;
