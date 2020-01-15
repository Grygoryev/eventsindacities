import events from '../events.json'

const initeState = {
  events: [...events],
  favouriteEvents: []
}

const rootReducer = (state = initeState, action) => {
  if (action.type === 'DELETE_EVENT') {
    let newEvents = state.events.filter(event => action.id !== event.id)
    
    return {
      ...state,
      events: newEvents
    }
  }

  if (action.type === 'FILTER_BY_CATEGORY') {
    let newList = state.events.filter( event => {
      return event.categories.includes(action.categoryName)
    })
    
    return {
      ...state,
      events: newList
    }
  }

  if (action.type === 'ADD_FAVOURITE') {
    let newOne = state.events.find(event => event.id == action.id)
    newOne.isFavourite = !newOne.isFavourite
    let newFavouriteEvents = state.favouriteEvents.filter(event => event.id != newOne.id)
    
    return {
      ...state,
      favouriteEvents: [...newFavouriteEvents, newOne]
    }
  }

  if (action.type === 'REMOVE_FAVOURITE') {
    let target = state.events.find(event => event.id == action.id)
    target.isFavourite = !target.isFavourite
    let newFavouriteEvents = state.favouriteEvents.filter(event => action.id != event.id)

    return {
      ...state,
      favouriteEvents: newFavouriteEvents
    }
  }

  if (action.type === 'SHOW_FAVOURITES') {
    let favouriteEvents = state.favouriteEvents

    return {
      ...state,
      events: favouriteEvents
    }
  }

  if (action.type == 'SET_DEFAULT') {
    return {
      ...state,
      events
    }
  }

  if (action.type == 'SORT_PRICE_TO_UP') {
    let sortedToUpEvents = state.events.sort( (a, b) => a.price - b.price )
    let newArr = sortedToUpEvents.slice(0) /* создаю новый массив, так как предыдущая запись только изменяет старый */
    return {
      ...state,
      events: newArr
    }
  }

  if (action.type == 'SORT_PRICE_TO_DOWN') {
    let sortedToDownEvents = state.events.sort( (a, b) => b.price - a.price)
    let newArr = sortedToDownEvents.slice(0)

    return {
      ...state,
      events: newArr
    }
  }

  return state
}

export default rootReducer
