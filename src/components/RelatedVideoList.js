import React from 'react'
import { addVideos } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './RelatedVideoList.css'

class VideoItem extends React.Component {
  componentDidMount() {
    if (this.props.currentVid && this.props.videos.length > 4) {
      this.props.addVideos(this.props.currentVid)
    }
  }

  renderList = () => {
    if (this.props.videos === undefined) {
      return <div>Loading...</div>
    }

    return this.props.videos.filter(video => video.id.videoId).map(video => {
      return (
        <Link
          to={`/play/${video.id.videoId}`}
          key={video.id.videoId}
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <div>
            <div className="ImgDetails">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <div className="RelatedVideoDetails">
                <div className="RelatedVideoSnippet">{video.snippet.title}</div>
                <div className="RelatedChannelTitle">
                  <i className="fas fa-circle"></i> {video.snippet.channelTitle}
                </div>
              </div>
            </div>
          </div>
        </Link>
      )
    })
  }

  render() {
    return (
      <div className="renderedVideoList">
        <h3 style={{ margin: '0', padding: '0' }}>Related Videos</h3>
        <div className="RelatedVideoList">{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { videos: Object.values(state.videos) }
}

export default connect(mapStateToProps, { addVideos })(VideoItem)
