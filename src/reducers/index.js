import { ADD_MESSAGE } from '../actions'

const messages = (state = [], action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      const id = state.length === 0 ? 1 : state.length + 1;
      // id, user_id, user_nameは仮置き
      const message = { id, user_id: 1, user_name: 'sample', content: action.content, read: false, current_user: true }
      return [...state, { ...message }]
    default:
      return state
  }
}

export default messages;