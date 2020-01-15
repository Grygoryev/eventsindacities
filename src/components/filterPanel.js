import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPriceToUp } from '../actions/eventActions'
import { sortPriceToDown } from '../actions/eventActions'
import { setDefault } from '../actions/eventActions'
import { showFavourites } from '../actions/eventActions'
import { chooseCategory } from '../actions/eventActions'

class FilterPanel extends Component {

  handlePriceUp = () => {
    this.props.sortPriceToUp()
  }

  handlePriceDown = () => {
    this.props.sortPriceToDown()
  }

  handleDefault = () => {
    this.props.setDefault()
  }

  showFavourites = () => {
    this.props.showFavourites()
  }

  render() { 
    
    return (
      <div className="filter-panel">
        <h6>Сортировать по:</h6>
        <div className="filter-panel__options">
          <span className="filter-panel__option" onClick={this.handlePriceDown}>Убыванию цены</span>
          <span className="filter-panel__option" onClick={this.handlePriceUp}>Возрастанию цены</span>
          <span className="filter-panel__option" onClick={this.showFavourites}>Избранное</span>
          <span className="filter-panel__option" onClick={this.handleDefault}>Сбросить сортировку</span>
        </div>
      </div>
    )}
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortPriceToUp: () => { dispatch(sortPriceToUp()) },
    sortPriceToDown: () => { dispatch(sortPriceToDown()) },
    setDefault: () => { dispatch(setDefault()) },
    showFavourites: () => { dispatch(showFavourites()) },
    chooseCategory: () => { dispatch(chooseCategory()) }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)