import { ADD_CURRENT_USER_INFO, DELETE_CURRENT_USER_INFO, SET_CURRENT_USER_INFO_FROM_LOCALSTORAGE } from '../actions';
import { APP_KEY } from '../shared';

const currentUserInfos = (state = [], action) => {
  switch(action.type) {
    case ADD_CURRENT_USER_INFO:
      const image = action.image ? action.image : '';
      const params = { uid: action.uid, name: action.name, image }
      localStorage.setItem(APP_KEY, JSON.stringify(params))
      return params
    case DELETE_CURRENT_USER_INFO:
      localStorage.removeItem(APP_KEY)
      return ''
    case SET_CURRENT_USER_INFO_FROM_LOCALSTORAGE:
      const currentUserInfo = JSON.parse(localStorage.getItem(APP_KEY, JSON.stringify(state)))
      return currentUserInfo
    default:
      return state
  }
}

export default currentUserInfos;