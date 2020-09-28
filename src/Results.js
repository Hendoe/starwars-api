import React, { Component } from 'react';

class Results extends Component {
  render() {
    const list = this.props.characters.map((item) => {
      return (
        <li key = {item.id}>
          <h2>{item.name}</h2>
        </li>
      );
    });
    return (
      <div className='theResults'>
        <ul>
          {list}
        </ul>
      </div>
    );
  };
};

export default Results;