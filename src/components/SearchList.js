import React from 'react'
import { connect } from 'react-redux'
import { addVideos } from '../actions'
import { Link } from 'react-router-dom'
import Header from './Header'
import './SearchList.css'
import { getFormValues } from 'redux-form'

class SearchList extends React.Component {
  // componentDidMount = () => {
  //   this.props.addVideos('davido')
  // }

  renderList = () => {
    return this.props.videos
      .filter(video => video.id.videoId)
      .map(video => {
        return (
          <Link
            to={`/play/${video.id.videoId}`}
            key={video.id.videoId}
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <div>
              <div className="SearchListItem">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <div className="SearchListDetails">
                  <div className="SearchListTitle">{video.snippet.title}</div>
                  <p className="SearchListDesc">{video.snippet.description}</p>
                  <div className="SearchListChannel">
                    <i className="fas fa-circle"></i>{' '}
                    {video.snippet.channelTitle}
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
      <div>
        <Header />
        <div className="SearchListContainer">
          <h3>Search Results</h3>
          <div className="SearchListItemsContainer">{this.renderList()}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: Object.values(state.videos),
    formStates: getFormValues('videoform')(state)
  }
}

export default connect(mapStateToProps, { addVideos })(SearchList)
