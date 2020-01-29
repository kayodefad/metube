import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { addVideos } from '../actions'
import { Link } from 'react-router-dom'
import './VideoList.css'

class VideoList extends React.Component {
  componentDidMount() {
    this.props.addVideos('2020 tv series and movie trailers')
  }

  renderList = () => {
    if (!this.props.videos) {
      return <div>Loading...</div>
    }

    return this.props.videos.map(video => {
      return (
        <Link
          to={`/play/${video.id.videoId}`}
          style={{ textDecoration: 'none' }}
          key={video.id.videoId}
        >
          <div className="VideoItem">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <div className="videoDesc">
              <div className="vidtitle">{video.snippet.title}</div>
              <div className="channel">
                <i className="fas fa-circle"></i> {video.snippet.channelTitle}
              </div>
            </div>
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
