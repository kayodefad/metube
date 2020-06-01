import { ADD_VIDEOS, PLAY_VIDEO } from './types'
import axios from 'axios'

export const addVideos = term => async dispatch => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyCoJa49vcHteYXZ-l7U4IIuZ0qM96vs_Qw&q=${term}`
  )

  dispatch({ type: ADD_VIDEOS, payload: response.data.items })
  // history.push('/')
}

export const playVideo = (id) => async dispatch => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyCoJa49vcHteYXZ-l7U4IIuZ0qM96vs_Qw&q=${id}`
  )

  dispatch({ type: PLAY_VIDEO, payload: response.data.items })
}

// Api key 1: AIzaSyD8ngrp7DzWV6IMFJzsGYGpOJIrE8WqM9U
// Api key 2: AIzaSyAci3hn1eTaPmMWo5pW-r5rpLslB5U5pNw
// Api key 3: AIzaSyB5-3BfyxIUrsEne-E7Zj7uMd4_272xgTw
// AIzaSyCgTXlMdNUMIYEo7WDVWbCacITH-yPQcfs
//AIzaSyCoJa49vcHteYXZ-l7U4IIuZ0qM96vs_Qw
