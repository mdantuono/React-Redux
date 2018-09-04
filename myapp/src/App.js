import React, { Component } from 'react';
import Tea from './Tea';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My app</h1>
        </header>
        <p className="App-intro">
          Welcome bitchass
        </p>
        <Tea />
      </div>
    );
  }
}

export default App;
