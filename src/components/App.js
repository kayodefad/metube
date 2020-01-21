import React from 'react'
import './App.css'
import { Router, Route, Switch } from 'react-router-dom'
import VideoList from './VideoList'
import VideoPlay from './VideoPlay'
import history from '../history'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={VideoList}></Route>
          <Route path="/play/:id" exact component={VideoPlay}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
