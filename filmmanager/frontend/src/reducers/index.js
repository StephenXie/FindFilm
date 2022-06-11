import { combineReducers } from 'redux';
import preferences from './preferences';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  preferences,
  errors,
  messages,
  auth,
});
