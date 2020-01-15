import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/eventActions'
import { addToFavourite } from '../actions/eventActions'

class Event extends Component {

  handleDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  handleAddingFavourite = () => {
    this.props.addToFavourite(this.props.event.id)
    this.props.history.push('/')
  }

  render() {
    let eventImage = this.props.event.image ? <img src={this.props.event.image} alt="eventPhoto"/> : ''
    const event = this.props.event ? (
      <div className="post">
        <h4 className="post-title">{this.props.event.title}</h4>
        <p>{eventImage}</p>
        <p>{this.props.event.description}</p>
        <h5>Описание: </h5>
        <p>{this.props.event.body}</p>
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
  return {
    event: state.events.find(event => id == event.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: id => { dispatch(deleteEvent(id)) },
    addToFavourite: id => { dispatch(addToFavourite(id) )}
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Event)