import data from '../data.json';

const initeState = {
  posts: [...data]
}

const rootReducer = (state = initeState, action) => {
  return state
}

export default rootReducer

console.log(initeState)