import React, { Component } from 'react';
import Selector from './Selector';
import Results from './Results';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)  
      this.state = {
        characters: [],
        name: ''
      };
  };
  
  getName = (event) => {
    this.setState({
      name: event.value
    });
  };

  handleAdd = () => {
    let url = SARWATS
    let name = this.state.name

    if (!this.state.name || !this.state.characters) {
      alert('There are no matches')
    } else {
      fetch(`${url}${name}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            characters: data.items
          })
        });
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require("./images/vader.jpeg")} className="App-logo" alt="logo" />
          <Selector handleAdd={this.handleAdd} getName={this.getName} stateName={this.state.name}/>
          <label htmlFor='search-bar'>
            <form type="text" className='search-bar'></form>
          </label>
          <Results />
        </header>
      </div>
    );
  };
};

export default App;