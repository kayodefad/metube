import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { addVideos } from '../actions'
import { Link } from 'react-router-dom'
import './VideoList.css'

class VideoList extends React.Component {
  componentDidMount() {
    this.props.addVideos('best of messi')
  }

  renderList = () => {
    if (!this.props.videos) {
      return <div>Loading...</div>
    }

    return this.props.videos.map(video => {
      return (
        <Link to={`/play/${video.id.videoId}`} style={{textDecoration:'none'}}>
          <div className="VideoItem" key={video.id.videoId}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <div className="title">{video.snippet.title}</div>
            <div className="channel">{video.snippet.channelTitle}</div>
          </div>
        </Link>
      )
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h3>Recommended</h3>
          <div className="VideoList">{this.renderList()}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { videos: Object.values(state.videos) }
}

export default connect(mapStateToProps, { addVideos })(VideoList)
