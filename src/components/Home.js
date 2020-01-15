import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FilterPanel from './filterPanel'
import { addToFavourite } from '../actions/eventActions'
import { removeFavourite } from '../actions/eventActions'

class Home extends Component {

  addToFavourite = (e) => {
    this.props.addToFavourite(e.target.id)
  }

  removeFavourite = (e) => {
    this.props.removeFavourite(e.target.id)
  }

  render() {
    const { events } = this.props
    const eventsList = events.length ? ( 
      events.map( event => {
        let eventPrice = event.price === 0 ? 'Бесплатно' : event.price
        let eventCategories = event.categories.join(' ')

        return (
          <div className="post event-card card" key={event.id}> 
            <div className="favourite-controls">
                <div className="favourite-controls__option" onClick={this.addToFavourite} id={event.id}>
                  Добавить в избранное  
                </div> 
                <div className="favourite-controls__option" onClick={this.removeFavourite} id={event.id}>
                  Удалить из избранного
                </div>
            </div>
            <Link to={'/' + event.id}>
              <div className="event-content">
                <h5 className="card-title">{event.title}</h5>
                <div className="card-content__info">
                  <p className="price"><b>Стоимость:</b> { eventPrice } </p>
                  <p className="category"><b>Метки: </b> { eventCategories } </p>
                </div>
              </div>
            </Link>
          </div>
        )})
      ) : (
        <div className="center"> No posts yet </div>
      )
   
    return (
      <div className="container events-container">
        <FilterPanel />
        <div>{eventsList}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourite: id => { dispatch(addToFavourite(id)) },
    removeFavourite: id => { dispatch(removeFavourite(id)) }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home)