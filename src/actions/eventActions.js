export const deleteEvent = id => {
  return {
    type: 'DELETE_EVENT',
    id
  }
}

export const filterByCategory = categoryName => {
  return {
    type: 'FILTER_BY_CATEGORY',
    categoryName
  }
}

export const addToFavourite = id => {
  return {
    type: 'ADD_FAVOURITE',
    id
  }
}

export const removeFavourite = id => {
  return {
    type: 'REMOVE_FAVOURITE',
    id
  }
}

export const showFavourites = () => {
  return {
    type: 'SHOW_FAVOURITES'
  }
}

export const setDefault = () => {
  return {
    type: 'SET_DEFAULT'
  }
}

export const sortPriceToUp = () => {
  return {
    type: 'SORT_PRICE_TO_UP'
  }
}

export const sortPriceToDown = () => {
  return {
    type: 'SORT_PRICE_TO_DOWN'
  }
}

export const chooseCategory = () => {
  return {
    type: 'CHOOSE_CATEGORY'
  }
}