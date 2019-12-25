import { ADD_CURRENT_USER_INFO,
         DELETE_CURRENT_USER_INFO } from '../actions';

const currentUserInfos = (state = [], action) => {
  switch(action.type) {
    case ADD_CURRENT_USER_INFO:
      let image = action.image ? action.image : '';
      let currentUserInfos = { uid: action.uid, name: action.name, image }
      return currentUserInfos
    case DELETE_CURRENT_USER_INFO:
      return ''
    default:
      return state
  }
}

export default currentUserInfos;