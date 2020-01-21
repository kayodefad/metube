import _ from 'lodash'
import { ADD_VIDEOS } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_VIDEOS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
