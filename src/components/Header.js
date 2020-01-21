import React from 'react'
import VideoForm from './VideoForm'
import './Header.css'
import { connect } from 'react-redux'
import { addVideos } from '../actions'

class Header extends React.Component {
  onSubmit = formValues => {
    this.props.addVideos(formValues.searchTerm)
  }

  render() {
    return (
      <div className="Header">
        <div>
          <i className="fab fa-youtube"></i>{' '}
          <span style={{ fontWeight: 'bold' }}>MeTube</span>
        </div>
        <VideoForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { addVideos })(Header)
