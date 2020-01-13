import data from '../data.json'
import events from '../events.json'

const initeState = {
  // posts: [...data],
  events: [...events],
  favouriteEvents: []
}

const rootReducer = (state = initeState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    })
    
    return {
      ...state,
      posts: newPosts
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

// console.log(initeState)