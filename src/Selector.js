import React, { Component } from 'react';

class Selector extends Component {
  render() {
    return (
      <div className= 'searchBar'>
        <label htmlFor='character'>Search for a Star Wars Character!</label>
        <input name='name' value={this.props.stateName} onChange={event => this.props.getName}></input>
        <button htmlFor='character' type='button' className='search-button' onClick={() => this.props.handleAdd}>Search Now</button>
      </div>
    );
  };
};

export default Selector;