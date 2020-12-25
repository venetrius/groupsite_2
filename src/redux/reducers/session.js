import { ADD_USER } from "../actionTypes";

export default function(state = null, action) {
  if (ADD_USER != action.type) {
    return state
  }
  console.log('ADD_USER', action)

  const { content } = (action && action.payload) || {};
  return {
    content
  };
}
