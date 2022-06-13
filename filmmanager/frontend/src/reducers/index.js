import { combineReducers } from 'redux';
import preferences from './preferences';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import groups from './groups';

export default combineReducers({
  preferences,
  errors,
  messages,
  auth,
  groups,
});
