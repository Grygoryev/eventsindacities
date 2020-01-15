import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FilterPanel from './filterPanel'
import { addToFavourite, removeFavourite, filterByCategory } from '../actions/eventActions'
import StarIcon from '../icons/starIcon.js'

class Home extends Component {

  handleFavourite = (e) => {
    e.preventDefault()

    if (e.target.closest('.event-card').classList.contains('--favourite')) {
      this.props.removeFavourite(e.target.id)
      e.target.closest('.event-card').classList.remove('--favourite')
      e.target.innerHTML = 'Добавить избранное'
    } else {
      this.props.addToFavourite(e.target.id)
      e.target.closest('.event-card').classList.add('--favourite')
      e.target.innerHTML = 'Убрать из избранного'
    }
  }

  filterByCategory = (e) => {
    e.preventDefault()
    this.props.filterByCategory(e.target.innerHTML)
  }

  render() {
    const { events } = this.props
    const eventsList = events.length ? ( 
      events.map( (event, index) => {
        let isFavouriteClass = event.isFavourite ? '--favourite' : ''
        let isFavouriteLabel = event.isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'
        let eventPrice = event.price === 0 ? `Бесплатно` : `${event.price} рублей` 
        let eventCategories = event.categories.map( (category, index) => {
          return (
            <span key={index}>#<span className="event-tag" onClick={this.filterByCategory}>{ category }</span> </span>
          )
        })

        return (
          <Link to={'/' + event.id} key={index}>
            <div className={"post event-card card " + isFavouriteClass} key={event.id}> 
              <div className="favourite-controls">
                  <div className="favourite-controls__option" onClick={this.handleFavourite} id={event.id}>
                    { isFavouriteLabel }
                  </div> 
              </div>
              
                <div className="event-content">
                  <h5 className="event-card-title">{event.title}</h5>
                  <div className="card-content__info">
                    <div className="price"><b>Стоимость:</b> { eventPrice } </div>
                    <div className="categories"><b>Теги: </b> { eventCategories } </div>
                  </div>
                </div>
                
            </div>
          </Link>
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
  return {
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourite: id => { dispatch(addToFavourite(id)) },
    removeFavourite: id => { dispatch(removeFavourite(id)) },
    filterByCategory: categoryName => { dispatch(filterByCategory(categoryName)) }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home)