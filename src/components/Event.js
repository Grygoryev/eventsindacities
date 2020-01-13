import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToFavourites } from '../actions/postActions'

class Event extends Component {
  render() {
    let eventImage = this.props.event.image ? <img src={this.props.event.image} alt="eventPhoto"/> : ''
    const event = this.props.event ? (
      <div className="post">
        <h4 className="post-title">{this.props.event.title}</h4>
        <p>{eventImage}</p>
        <p>{this.props.event.description}</p>
        <h5>Описание: </h5>
        <p>{this.props.event.body}</p>
        <div className="center">
          <button className='btn grey' onClick={this.handleClick}>
            Delete post
          </button>
        </div>
      </div>
    ) : (
      <div> loading post... </div>
    )
    return (
      <div className="container">
       { event }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.event_id
  console.log(state)
  return {
    event: state.events.find(event => id == event.id)
  }
}

export default connect(mapStateToProps)(Event)