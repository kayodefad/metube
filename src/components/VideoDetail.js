import React from 'react'
import './VideoDetail.css'

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props

    if (!video) {
      return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`

    return (
      <div className="VideoDetailsContainer">
        <div className="iframevid">
          <iframe src={videoSrc} title="video player" allowFullScreen frameBorder="0" />
        </div>
        <div className="description">
          <h4>{video.snippet.title}</h4>
          <p className="desc">{video.snippet.description}</p>
          <div className="vidDetailsChannel"><i className="fas fa-circle"></i> {video.snippet.channelTitle}</div>
        </div>
      </div>
    )
  }
}

export default VideoDetail
