import {ADD_VIDEOS} from './types'
import axios from 'axios'

export const addVideos = (term) => async dispatch => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyAuj8yCQKUPLBUju0dEdmkLxGNYE0Gglw0&q=${term}`
  )

  dispatch({ type: ADD_VIDEOS, payload: response.data.items })
}