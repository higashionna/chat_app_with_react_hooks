import chatRooms from './chatRooms';
import { combineReducers } from 'redux';
import currentUserInfos from './currentUserInfos';
import messages from './messages';

export default combineReducers({
  messages,
  currentUserInfos,
  chatRooms
})