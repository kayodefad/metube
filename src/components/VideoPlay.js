import React from 'react'
import { connect } from 'react-redux'
import { playVideo } from '../actions'
import Header from './Header'
import VideoDetail from './VideoDetail'
import './VideoPlay.css'
import VideoItem from './RelatedVideoList'

class VideoPlay extends React.Component {
  componentDidMount() {
    this.props.playVideo(this.props.match.params.id)
    window.scrollTo(0, 0)
  }

  render() {
    let vidTitle
    if (this.props.video) {
      vidTitle = this.props.video.snippet.title
    }
    return (
      <div>
        <Header />
        <div className="VideoPlayerStyle">
          <div className="VideoDetailStyle">
            <VideoDetail video={this.props.video} />
          </div>
          <div className="VideoItemStyle">
            <VideoItem currentVid={vidTitle} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    video: Object.values(state.videos).filter(
      video => video.id.videoId === ownProps.match.params.id
    )[0]
  }
}

export default connect(mapStateToProps, { playVideo })(VideoPlay)
