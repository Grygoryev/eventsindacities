export const deleteEvent = id => {
  return {
    type: 'DELETE_EVENT',
    id
  }
}

export const addToFavourite = id => {
  return {
    type: 'ADD_TO_FAVOURITE',
    id
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