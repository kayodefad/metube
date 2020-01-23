import { ADD_VIDEOS, PLAY_VIDEO } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_VIDEOS:
      return {
        ...state,
        ...action.payload
      }
    case PLAY_VIDEO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
