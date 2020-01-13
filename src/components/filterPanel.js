import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortPriceToUp } from '../actions/eventActions'
import { sortPriceToDown } from '../actions/eventActions'
import { setDefault } from '../actions/eventActions'


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

  showFavouriteEvents = () => {
    this.props.showFavouriteEvents()
  }

  render() { 

    return (
      <div className="filter-panel">
        <b>Сортировать по:</b>
        <span className="filter-panel__option" onClick={this.handlePriceDown}>Убыванию цены</span>
        <span className="filter-panel__option" onClick={this.handlePriceUp}>Возрастанию цены</span>
        <span className="filter-panel__option" onClick={this.showFavourite}>Избранное</span>
        <span className="filter-panel__option" onClick={this.handleDefault}>Сбросить сортировку</span>
      </div>
    )}
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortPriceToUp: () => { dispatch(sortPriceToUp()) },
    sortPriceToDown: () => { dispatch(sortPriceToDown()) },
    setDefault: () => { dispatch(setDefault()) }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)