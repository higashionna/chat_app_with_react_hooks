import { combineReducers } from 'redux';
import chatRooms from './chatRooms';
import currentUserInfos from './currentUserInfos';
import messages from './messages';

export default combineReducers({
  messages,
  currentUserInfos,
  chatRooms
})
