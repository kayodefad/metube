import { ADD_VIDEOS, PLAY_VIDEO } from './types'
import axios from 'axios'

export const addVideos = term => async dispatch => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyAci3hn1eTaPmMWo5pW-r5rpLslB5U5pNw&q=${term}`
  )

  dispatch({ type: ADD_VIDEOS, payload: response.data.items })
  // history.push('/')
}

export const playVideo = (id) => async dispatch => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyAci3hn1eTaPmMWo5pW-r5rpLslB5U5pNw&q=${id}`
  )

  dispatch({ type: PLAY_VIDEO, payload: response.data.items })
}


