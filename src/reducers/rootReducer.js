import events from '../events.json'

const initeState = {
  events: [...events],
  favouriteEvents: []
}

const rootReducer = (state = initeState, action) => {
  if (action.type === 'DELETE_EVENT') {
    let newEvents = state.events.filter(event => {
      return action.id !== event.id
    })
    
    return {
      ...state,
      events: newEvents
    }
  }

  if (action.type == 'SET_DEFAULT') {
    return {
      ...state,
      events
    }
  }

  if (action.type == 'SORT_PRICE_TO_UP') {
    /* --under construction-- */
    return {
      ...state
      // events: sortedToUpEvents
    }
  }

  if (action.type == 'SORT_PRICE_TO_DOWN') {
    /* --under construction-- */
  

    return {
      ...state
      // events: sortedToDownEvents
    }
  }

  if (action.type === 'ADD_TO_FAVOURITES') {
    let favouriteEvents = state.events.filter(event => event.isFavourite)
    return {
      ...state,
      favouriteEvents
    }
  }

  return state
}

export default rootReducer
