import { combineReducers } from 'redux';
import messages from './messages';
import currentUserInfos from './currentUserInfos';

export default combineReducers({
  messages,
  currentUserInfos
})