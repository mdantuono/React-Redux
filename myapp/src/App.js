import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Mike', age: 20, belt: 'green', id: 2 },
      { name: 'Bob', age: 25, belt: 'blue', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My app</h1>
        </header>
        <p className="App-intro">
        </p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={ this.state.ninjas }/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
