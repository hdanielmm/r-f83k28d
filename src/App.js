import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={this.increaseCounter.bind(this)}>Incrementa</button>
      </div>
    );
  }

  increaseCounter() {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default App;
