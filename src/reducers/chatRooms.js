import { firebaseDb } from '../firebase';
import { ADD_CHAT_ROOM } from '../actions';

const ChatRooms = (state = [], action) => {
  switch(action.type) {
    case ADD_CHAT_ROOM:
      firebaseDb.ref('chat_rooms/').push()
    default:
      return state
  }
}

export default ChatRooms;
