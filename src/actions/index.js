import { ADD_VIDEOS, PLAY_VIDEO } from './types'
import axios from 'axios'

export const addVideos = term => async dispatch => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyD8ngrp7DzWV6IMFJzsGYGpOJIrE8WqM9U&q=${term}`
  )

  dispatch({ type: ADD_VIDEOS, payload: response.data.items })
  // history.push('/')
}

export const playVideo = (id) => async dispatch => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyD8ngrp7DzWV6IMFJzsGYGpOJIrE8WqM9U&q=${id}`
  )

  dispatch({ type: PLAY_VIDEO, payload: response.data.items })
}

// Api key 1: AIzaSyD8ngrp7DzWV6IMFJzsGYGpOJIrE8WqM9U
