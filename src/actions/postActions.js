export const deletePost = id => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const addToFavourite = id => {
  return {
    type: 'ADD_TO_FAVOURITE',
    id
  }
}