import { ADD_MESSAGE, SET_MESSAGES } from '../actions'
import currentDate from '../shared';
import { firebaseDb }from '../firebase';

const messages = (state = [], action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      const message = { uid: action.uid,
                        userImage: action.image,
                        content: action.content,
                        createdAt: action.createdAt ? action.createdAt : currentDate() }
      firebaseDb.ref('messages/').push(message);
      return [...state, { ...message }]
    case SET_MESSAGES:
      return [...state, action.messages]
    default:
      return state
  }
}

export default messages;
