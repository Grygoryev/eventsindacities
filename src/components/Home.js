import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    const { events } = this.props
    const eventsList = events.length ? ( 
      events.map( event => {
        let eventPrice = event.isFree ? 'Бесплатно' : event.price
        let eventCategories = event.categories.join(' ')

        return (
          <div className="post event-card card" key={event.id}> 
            <p className="event-card__to-favourite-action">
              В избранное  
            </p> 
            <Link to={'/' + event.id}>
              <div className="card-content">
                <h3 className="card-title">{event.title}</h3>
                <p>{event.description}</p>
                <div className="card-content__info">
                  <p className="price"><b>Стоимость:</b> { eventPrice }</p>
                  <p className="category"><b>Метки: </b>{ eventCategories }</p>
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
        <div>{eventsList}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.events)
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(Home)