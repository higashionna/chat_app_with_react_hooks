import { ADD_CHAT_ROOM } from '../actions'
import { firebaseDb }from '../firebase';

const messages = (state = [], action) => {
  switch(action.type) {
    case ADD_CHAT_ROOM:
      firebaseDb.ref('chat_rooms/').push()
    default:
      return state
  }
}

export default messages;
