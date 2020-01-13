import data from '../data.json';

const initeState = {
  posts: [...data]
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
  return state
}

export default rootReducer

console.log(initeState)